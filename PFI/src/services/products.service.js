import { readDocuments, readDocument, createDocument, updateDocument, deleteDocument } from "../models/products.models.js";

export const createProductService = async (producto) => {
    return await createDocument("productos", producto)
}

export const deleteProductService = async (id) => {
    console.log("Capa de servicios")
    return await deleteDocument("productos", id)
}

export const updateProductService = async (id, data) => {
    return await updateDocument("productos", id, data)
}

export const getProductByIdService = async (id) => {
    return await readDocument("productos", id);
};

export const getProductsByFilters = async ({ categoria, precio }) => {
    if (categoria === undefined && precio === undefined) {
        return await readDocuments("productos");
    }

    const products = await readDocuments("productos");
    // Filtramos los productos según los filtros que se hayan pasado. Si un filtro no se pasó, no lo aplicamos.
    return products.filter(product => {
        // Empezamos asumiendo que el producto cumple todos los filtros.
        let match = true;

        // Si se pasa categoría, verificamos que coincida.
        if (categoria !== undefined) {
            // Si match = true, match se mantiene true solo si la categoría coincide. Si no coincide, match se vuelve false.
            match = match && product.categoria === categoria;
        }

        // Si se pasa precio, verificamos que el producto tenga un precio menor o igual.
        // Si match ya es false, permanece false.
        if (precio !== undefined) {
            match = match && product.precio <= precio;
        }

        // Al final, devolvemos true si el producto pasó todos los filtros activos.
        return match;
    });
};