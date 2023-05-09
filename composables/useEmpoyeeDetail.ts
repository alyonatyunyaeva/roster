import {
	getEmployeeQuery,
	updateEmployeeQuery,
	addEmployeeQuery,
} from "~/server/api";
import { IEmployee } from "~/types";

export default function () {
	const employeeDetail = useState<IEmployee | null>(
		"employeeDetail",
		() => null
	);
	const setEmployeeDetail = (data: IEmployee) => {
		employeeDetail.value = data;
	};
	const getEmployeeDetail = async (id: string) => {
		try {
			const employee = await getEmployeeQuery(id);
			employeeDetail.value = employee;
		} catch (e) {
			console.log(e);
		}
	};
	const updateEmployeeDetail = (data: IEmployee) => {
		updateEmployeeQuery(data?.id || "", data);
	};
	const createEmployee = (data: IEmployee) => {
		addEmployeeQuery(data);
	};
	return {
		employeeDetail,
		setEmployeeDetail,
		getEmployeeDetail,
		updateEmployeeDetail,
		createEmployee,
	};
}
