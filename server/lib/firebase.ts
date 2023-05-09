import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version

const firebaseConfig = {
	apiKey: "AIzaSyB1fJng6yMH_hB0FPfmS1CJbmHLJUy90pM",
	authDomain: "employee-roster-20f02.firebaseapp.com",
	projectId: "employee-roster-20f02",
	storageBucket: "employee-roster-20f02.appspot.com",
	messagingSenderId: "895346405619",
	appId: "1:895346405619:web:69f9f4e857cbc6405e4786",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);
