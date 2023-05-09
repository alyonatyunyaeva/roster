<template>
    <div>
        <EmployeeForm v-if="newEmployee" :employee=newEmployee></EmployeeForm>
        <el-button @click="handleCreate">Create employee</el-button>
    </div>
</template>
<script setup lang="ts">
import { IEmployee } from '~/types';


const { createEmployee } = useEmpoyeeDetail()

const router = useRouter();
const initialState = {
    name: 'Олеся',
    surname: 'Вячеславова',
    age: 71,
    address: 'Москва, новые куличики',
    employmentDate: '11.12.2222',
}
const newEmployee = useState<IEmployee | null>('newEmployee', () => initialState)

const handleCreate = async () => {
    if (newEmployee.value) {
        await createEmployee(newEmployee.value)
        newEmployee.value = null
        router.back();
    }
}



</script>