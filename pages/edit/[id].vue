<template>
    <div>
        <EmployeeForm v-if="employeeDetail" :employee=employeeDetail></EmployeeForm>
        <el-button @click="handleSave">Save changes</el-button>
    </div>
</template>
<script setup lang="ts">

const { employeeDetail, getEmployeeDetail, updateEmployeeDetail } = useEmpoyeeDetail()
const route = useRoute();
const router = useRouter();

const handleSave = async () => {
    if (employeeDetail.value) {
        await updateEmployeeDetail(employeeDetail.value)
        employeeDetail.value = null
        router.back();
    }
}


onMounted(() => {
    if (!employeeDetail.value) {
        getEmployeeDetail(route.params.id as string)
    }
})
</script>