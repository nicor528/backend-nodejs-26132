import { collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { db } from "./firebase.data.js";

/**
 * Lee todos los documentos de una colección.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @returns {Promise<Array<Object>>} Lista de documentos con id y datos.
 */
export async function readDocuments(collectionName) {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
}

/**
 * Lee un solo documento por id.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador del documento.
 * @returns {Promise<Object|null>} Documento con id y datos, o null si no existe.
 */
export async function readDocument(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return { id: docSnap.id, ...docSnap.data() };
}

/**
 * Crea un documento nuevo en la colección.
 * Firestore genera el id automáticamente.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {Object} data Objeto con los campos del documento.
 * @returns {Promise<string>} Id del documento creado.
 */
export async function createDocument(collectionName, data) {
  const colRef = collection(db, collectionName);
  const docRef = await addDoc(colRef, data);
  return docRef.id;
}

/**
 * Crea o reemplaza un documento con un id específico.
 * Use setDoc cuando desee controlar el id del documento.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador para el documento.
 * @param {Object} data Objeto con los campos del documento.
 * @returns {Promise<void>}
 */
export async function setDocument(collectionName, id, data) {
  const docRef = doc(db, collectionName, id);
  await setDoc(docRef, data);
}

/**
 * Actualiza campos de un documento existente.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador del documento.
 * @param {Object} data Campos a actualizar.
 * @returns {Promise<void>}
 */
export async function updateDocument(collectionName, id, data) {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
}

/**
 * Elimina un documento por id.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador del documento.
 * @returns {Promise<void>}
 */
export async function deleteDocument(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
}

/**
 * Ejemplo de consulta simple con filtros.
 * Busca documentos donde el campo status sea "activo".
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @returns {Promise<Array<Object>>}
 */
export async function queryDocumentsByStatus(collectionName) {
  const colRef = collection(db, collectionName);
  const q = query(colRef, where("status", "==", "activo"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
}

// Ejemplos de uso:
//
// import {
//   readDocuments,
//   readDocument,
//   createDocument,
//   setDocument,
//   updateDocument,
//   deleteDocument,
//   queryDocumentsByStatus,
// } from "./firestore.models.js";
//
// async function example() {
//   const collectionName = "products";
//
//   // Crear un documento nuevo con id generado automáticamente
//   const newId = await createDocument(collectionName, {
//     title: "Camiseta",
//     price: 1999,
//     stock: 25,
//     status: "activo",
//   });
//   console.log("Documento creado con id:", newId);
//
//   // Leer todos los documentos
//   const allProducts = await readDocuments(collectionName);
//   console.log("Productos:", allProducts);
//
//   // Leer un documento específico
//   const product = await readDocument(collectionName, newId);
//   console.log("Producto:", product);
//
//   // Actualizar campos de un documento existente
//   await updateDocument(collectionName, newId, { stock: 20 });
//   console.log("Producto actualizado");
//
//   // Reemplazar o crear un documento con id fijo
//   await setDocument(collectionName, "producto-fijo", {
//     title: "Buzo",
//     price: 3499,
//     stock: 12,
//     status: "activo",
//   });
//   console.log("Documento con id fijo creado/reemplazado");
//
//   // Eliminar un documento
//   await deleteDocument(collectionName, newId);
//   console.log("Documento eliminado");
//
//   // Consultar documentos por un campo
//   const activeProducts = await queryDocumentsByStatus(collectionName);
//   console.log("Productos activos:", activeProducts);
// }
//
// example().catch(console.error);
