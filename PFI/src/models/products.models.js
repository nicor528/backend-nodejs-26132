import { collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { db } from "../data/firebase.data.js";

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
  console.log("Data a guardar:");
  console.dir(data, { depth: null });
  const colRef = collection(db, collectionName);
  console.log("colección: ", colRef)
  const docRef = await addDoc(colRef, data);
  //const colRef = collection(db, collectionName);
  /*console.log("Coleccion obtenida")
  console.log(typeof data)
  const docRef = await addDoc(colRef, {
    nombre: data.nombre,
    categoria: data.categoria,
    precio: data.precio
  });
  console.log("Producto creado")*/
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
  return await updateDoc(docRef, data);
}

/**
 * Elimina un documento por id.
 * @param {string} collectionName Nombre de la colección en Firestore.
 * @param {string} id Identificador del documento.
 * @returns {Promise<void>}
 */
export async function deleteDocument(collectionName, id) {
  console.log("Capa de modelos")
  const docRef = doc(db, collectionName, id);
  return await deleteDoc(docRef);
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
