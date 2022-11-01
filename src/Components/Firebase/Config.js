// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrjQzL9amE-heSp4yIGR3bTMSOkJLL-nc",
  authDomain: "aqua-surveillance-1.firebaseapp.com",
  databaseURL: "https://aqua-surveillance-1-default-rtdb.firebaseio.com",
  projectId: "aqua-surveillance-1",
  storageBucket: "aqua-surveillance-1.appspot.com",
  messagingSenderId: "683202761691",
  appId: "1:683202761691:web:4be449d6ba36468f1b8dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initilize Firestore
const db = getFirestore(app)

// initilize RealTime Database
const database = getDatabase(app)

export {db ,database}

