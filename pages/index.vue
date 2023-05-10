<template>
    <div class="roster-container">
        <div class="add-button">
            <el-button circle :icon="Plus" @click="handleAddEmployee"></el-button>
        </div>
        <Roster></Roster>
    </div>
</template>

<script setup lang="ts">
import {
    Plus
} from '@element-plus/icons-vue'
const { getEmployees } = useGetEmpoyees()
const router = useRouter();

const handleAddEmployee = () => {
    router.push({
        name: 'create',
    });
}

onMounted(async () => {
    await getEmployees()
});

</script>

<style>
.roster-container {
    display: flex;
    flex-direction: column;
}

.add-button {
    display: inline-flex;
    justify-content: flex-end;
    width: 90%;
}
</style>