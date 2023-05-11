<template>
    <NuxtLayout name="form-layout">
        <template #header> Edit employee </template>

        <EmployeeForm v-if="employeeDetail" :employee=employeeDetail @submit="handleSave" button-title="Save changes">
        </EmployeeForm>
    </NuxtLayout>
</template>

<script setup lang="ts">

const { employeeDetail, setEmployeeDetail, getEmployeeDetail, updateEmployeeDetail } = useEmployeeDetail()
const route = useRoute();
const router = useRouter();

const handleSave = async () => {
    if (employeeDetail.value) {
        await updateEmployeeDetail(employeeDetail.value)
        setEmployeeDetail(null)
        router.back();
    }
}

onMounted(() => {
    if (!employeeDetail.value) {
        getEmployeeDetail(route.params.id as string)
    }
})
</script>