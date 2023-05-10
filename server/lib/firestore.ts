import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	doc,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const queryByCollection = async <T>(
	colName: string
): Promise<Array<T>> => {
	const colRef = collection(firestoreDb, colName);
	const snapshot = await getDocs(colRef);
	const docs = Array.from(snapshot.docs).map((doc) => {
		return {
			...doc.data(),
			id: doc.id,
		};
	}) as Array<T>;

	return docs;
};

export const queryByDocId = async <T>(
	colName: string,
	id: string
): Promise<T> => {
	const colRef = collection(firestoreDb, colName);
	const docRef = doc(colRef, id);
	const document = await getDoc(docRef);
	const data = {
		...document.data(),
		id: document.id,
	} as T;

	return data;
};

export const addDocument = async <T>(
	colName: string,
	document: Object
): Promise<T> => {
	const colRef = collection(firestoreDb, colName);
	const docRef = (await addDoc(colRef, document)) as T;
	return docRef;
};

export const updateDocument = async (
	colName: string,
	id: string,
	data: Record<string, any>
) => {
	const docRef = doc(collection(firestoreDb, colName), id);
	return await updateDoc(docRef, data);
};
export const delDocument = async (colName: string, id: string) => {
	const docRef = doc(firestoreDb, colName, id);
	return await deleteDoc(docRef);
};
