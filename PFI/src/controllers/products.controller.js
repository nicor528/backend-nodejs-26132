import { createProductService, getProductByIdService, getProductsByFilters, updateProductService, deleteProductService } from "../services/products.service.js";

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: 'ID del producto es requerido' });
    }
    const product = await getProductByIdService(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const categoria = req.query.categoria;
    const precioQuery = req.query.precio;
    // Si se pasó el query de precio, intentamos convertirlo a número. Si no se pudo convertir, devolvemos un error 400.
    const products = await getProductsByFilters({ categoria: categoria, precio: precioQuery });

    // Si no se encuentran productos con esos filtros, devolvemos un error 404.
    if (products.length === 0) {
      return res.status(404).json({ error: 'No se encontraron productos con esos filtros' });
    }
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const createProduct = async (req, res) => {
  const producto = req.body.producto
  console.log(producto)
  if (!producto) {
    return res.status(400).json({ message: 'Información del producto es requerida' });
  }
  try {
    const id = await createProductService(producto)
    producto.id = id
    res.status(200).json(producto);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
}

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (!id) {
    return res.status(400).json({ message: 'ID del producto es requerido' });
  }

  try {
    await updateProductService(id, data);
    res.status(200).json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al actualizar el producto' });
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Eliminando el producto ", id)
    if (!id) {
      return res.status(400).json({ message: 'ID del producto es requerido' });
    }
    await deleteProductService(id);
    res.status(200).json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};