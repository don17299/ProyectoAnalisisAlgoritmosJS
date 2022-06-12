/*
 * Hecho por:
 *  Carlos Mario Duque Mejía
 *  Claudia Patricia Ordoñez
 *  Sebastian Lugo Mateus
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOz-DpUY-71wWrmE1shhNOXNpKmosEl2U",
  authDomain: "testpensamientocomputacional.firebaseapp.com",
  projectId: "testpensamientocomputacional",
  storageBucket: "testpensamientocomputacional.appspot.com",
  messagingSenderId: "226333567569",
  appId: "1:226333567569:web:0d387a52653a133536a670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

/**
 * Metodo que guarda un usuario en firebase
 * @param {*} user 
 */
export const saveUser = (user) => addDoc(collection(db, "Users"), user)

/**
 * Metodo que retorna un usuario
 * @param {*} id 
 * @returns usuario
 */
export const getUser = id => getDoc(doc(db, "Users", id))

/**
 * Metodo que obtiene los usuarios almacenados en firebase
 * @returns usuarios
 */
export const getUsers = () => getDocs(collection(db, "Users"));

/**
 * listar en tiempo real datos de firebase (No usado.)
 * @param {*} callback 
 * @returns usuarios
 */
export const onGetUsers = (callback) => onSnapshot(collection(db, "Users"), callback)

/**
 * Metodo que elimina un usuario de firebase (No usado.)
 * @param {*} id 
 */
export const deleteUser = id => deleteDoc(doc(db, "Users", id))

/**
 * Metodo para actualizar un usario en firebase.
 * @param {*} id 
 * @param {*} newFields 
 * @returns 
 */
export const updateUser = (id, newFields) => updateDoc(doc(db, "Users", id), newFields)


