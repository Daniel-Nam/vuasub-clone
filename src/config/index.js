// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD-jcuSPS2H708ssDFn44W-BQN0d_cDHRo",
	authDomain: "vuasub-clone.firebaseapp.com",
	projectId: "vuasub-clone",
	storageBucket: "vuasub-clone.appspot.com",
	messagingSenderId: "437824431980",
	appId: "1:437824431980:web:4650170eeb8573b6a67549",
	measurementId: "G-BJLTL3L4ST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
};
