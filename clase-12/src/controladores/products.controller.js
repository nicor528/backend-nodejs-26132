import { getAllProductsService, getProductByIdService, getProductsByFilters } from "../servicios/products.service.js";
/*
export const getAllProducts = async (req, res) => {
    try{
      const products = await getAllProductsService();
      res.status(200).json(products);
    }catch(error){
      res.status(500).json({ message: 'Error al obtener los productos' });
    }
};*/

export const getProductById = async (req, res) => {
  try{    
    const id = req.params.id;
    const product = await getProductByIdService(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  }catch(error){
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};


export const getAllProducts = async (req, res) => {
    try {
        const categoryQuery = req.query.category;
        const priceQuery = req.query.price;
        let price = undefined;

        // Si el query param price existe, lo convertimos a número.
        // Si no existe, dejamos price como undefined para no filtrar por precio.
        if (priceQuery !== undefined) {
            price = Number(priceQuery);
        }

        // Si el query param price existe pero no es un número válido, devolvemos un error 400.
        if (priceQuery !== undefined && Number.isNaN(price)) {
            return res.status(400).json({ error: 'Precio inválido' });
        }

        // Si no se pasan filtros, devolvemos todos los productos.
        if (categoryQuery === undefined && price === undefined) {
            const products = await getAllProductsService();
            return res.status(200).json(products);
        }

        // Si se pasan filtros, obtenemos los productos que cumplen con esos filtros.
        const products = await getProductsByFilters({ category: categoryQuery, price });
        
        // Si no se encuentran productos con esos filtros, devolvemos un error 404.
        if (products.length === 0) {
            return res.status(404).json({ error: 'No se encontraron productos con esos filtros' });
        }
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};