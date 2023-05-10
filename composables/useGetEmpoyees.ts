import { getEmployeesQuery, deleteEmployeeQuery } from "~/server/api";
import { IEmployee } from "~/types";

export default function () {
    const employees = useState<IEmployee[]>("employees", () => []);
    const employeesEnriched = computed(() => {
        return employees.value.map((employee) => {
            return {
                ...employee,
                experience: calculateDifInYears(employee.employmentDate),
                age: calculateDifInYears(employee.birthdate),
            };
        });
    });

    const getEmployees = async (): Promise<void> => {
        try {
            const doc = await getEmployeesQuery();
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
        employeesEnriched,
        getEmployees,
        removeEmployee,
    };
}
