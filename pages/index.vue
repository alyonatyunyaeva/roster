<template>
    <Roster></Roster>
</template>

<script setup lang="ts">
const { getEmployees } = useGetEmpoyees()

onMounted(async () => {
    console.log('---Ю привет');

    await getEmployees()
});

</script>