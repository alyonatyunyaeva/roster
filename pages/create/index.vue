<template>
    <NuxtLayout name="form-layout">
        <template #header> Create employee </template>

        <EmployeeForm v-if="newEmployee" :employee=newEmployee @submit="handleCreate" button-title="Create employee">
        </EmployeeForm>

    </NuxtLayout>
</template>
<script setup lang="ts">
import { IEmployee } from '~/types';


const { createEmployee } = useEmpoyeeDetail()

const router = useRouter();
const initialState = {
    name: '',
    surname: '',
    address: '',
    employmentDate: '',
    birthdate: '',
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