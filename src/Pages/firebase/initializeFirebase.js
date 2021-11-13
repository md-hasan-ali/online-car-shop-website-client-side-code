// firebase initializetion file 
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitialization;