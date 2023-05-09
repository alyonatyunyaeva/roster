import { getEmployeesQuery, deleteEmployeeQuery } from "~/server/api";
import { IEmployee } from "~/types";

export default function () {
	const employees = useState<IEmployee[]>("employees", () => []);
	const getEmployees = async (): Promise<void> => {
		try {
			const doc = await getEmployeesQuery();
			// @ts-ignore
			employees.value = doc;
			console.log("employees.value", employees.value);
		} catch (error: unknown) {
			console.error(error);
		}
	};

	const removeEmployee = async (index: number, id: string): Promise<void> => {
		try {
			await deleteEmployeeQuery(id);
			employees.value.splice(index, 1);
		} catch (error: unknown) {
			console.error(error);
		}
	};

	return {
		employees,
		getEmployees,
		removeEmployee,
	};
}
