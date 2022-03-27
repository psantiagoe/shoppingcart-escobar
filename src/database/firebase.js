import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCfIYRHGLgcRh5cOI2LbdbUriczJ3AnpSY",
	authDomain: "shoppingcart-dec8f.firebaseapp.com",
	projectId: "shoppingcart-dec8f",
	storageBucket: "shoppingcart-dec8f.appspot.com",
	messagingSenderId: "220153839092",
	appId: "1:220153839092:web:0114358d0e91cd92284da1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
