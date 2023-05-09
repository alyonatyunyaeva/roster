import { IEmployee } from "~/types";
import {
	addDocument,
	delDocument,
	queryByCollection,
	queryByDocId,
	updateDocument,
} from "../lib/firestore";

export const getEmployeesQuery = async () =>
	await queryByCollection<IEmployee>("employees");

export const getEmployeeQuery = async (id: string) =>
	await queryByDocId<IEmployee>("employees", id);

export const addEmployeeQuery = async (data: IEmployee) =>
	await addDocument<IEmployee>("employees", data);

export const updateEmployeeQuery = async (id: string, data: IEmployee) =>
	await updateDocument("employees", id, data);

export const deleteEmployeeQuery = async (id: string) =>
	await delDocument("employees", id);
