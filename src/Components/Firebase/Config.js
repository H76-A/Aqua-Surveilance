// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBH4NXC4jXa_W-mABTFlSi7VzyVL1oBXeQ",
  authDomain: "aqua-surveillance-353e9.firebaseapp.com",
  databaseURL: "https://aqua-surveillance-1-default-rtdb.firebaseio.com",
  projectId: "aqua-surveillance-353e9",
  storageBucket: "aqua-surveillance-353e9.appspot.com",
  messagingSenderId: "312294264878",
  appId: "1:312294264878:web:982795f1cb06c62791cfbf",
  // databaseURL:"https://aqua-surveillance-1-default-rtdb.firebaseio.com"
  
  databaseURL:"https://aqua-surveillance-353e9-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initilize Firestore
const db = getFirestore(app)

// initilize RealTime Database
const database = getDatabase(app)

export {db ,database}

