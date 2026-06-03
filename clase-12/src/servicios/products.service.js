const products = [
  { id: 1, name: 'Producto 1', price: 1000 },
  { id: 2, name: 'Producto 2', price: 2000 },
];

export const getAllProductsService = () => {
  return products;
};

export const getProductByIdService = async (id) => {
  return products.find(product => product.id == id);
};

export const getProductsByFilters = async ({ category, price }) => {
    // Filtramos los productos según los filtros que se hayan pasado. Si un filtro no se pasó, no lo aplicamos.
    return products.filter(product => {
        // Empezamos asumiendo que el producto cumple todos los filtros.
        let match = true;

        // Si se pasa categoría, verificamos que coincida.
        if (category !== undefined) {
            // Si match = true, match se mantiene true solo si la categoría coincide. Si no coincide, match se vuelve false.
            match = match && product.categoria === category;
        }

        // Si se pasa precio, verificamos que el producto tenga un precio menor o igual.
        // Si match ya es false, permanece false.
        if (price !== undefined) {
            match = match && product.price <= price;
        }

        // Al final, devolvemos true si el producto pasó todos los filtros activos.
        return match;
    });
};