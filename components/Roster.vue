<template>
    <div>
        <el-button @click="handleAddEmployee">add Employee</el-button>
        <el-table :data="filterTableData" style="width: 100%">
            <el-table-column label="Name" prop="name" />
            <el-table-column label="Surname" prop="surname" />
            <el-table-column label="EmploymentDate" prop="employmentDate" />
            <el-table-column label="Age" prop="age" />
            <el-table-column label="Address" prop="address" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search" />
                </template>
                <template #default="scope">
                    <div class="controls">
                        <el-button :icon="Edit" circle size="large" @click="handleEdit(scope.$index, scope.row)">
                        </el-button>
                        <el-button :icon="Delete" circle size="large"
                            @click="handleDelete(scope.$index, scope.row)"></el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


  
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from "vue-router";
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { IEmployee } from '~/types';
import { addEmployeeQuery, deleteEmployeeQuery } from '~/server/api';

const { employees, removeEmployee } = useGetEmpoyees()
const { setEmployeeDetail } = useEmpoyeeDetail()

const router = useRouter();


const navigateToPage = (id: string) => {
    router.push({
        name: 'edit-id',
        params: { id }
    });
};

const handleAddEmployee = () => {
    router.push({
        name: 'create',
    });
}

const search = ref('')
const filterTableData = computed(() =>
    employees.value.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: IEmployee) => {
    setEmployeeDetail(row)
    navigateToPage(row.id || '')
}
const handleDelete = (index: number, row: IEmployee) => {
    removeEmployee(index, row?.id || '')
}


</script>
  
<style scoped lang="scss">
.controls {
    visibility: hidden;
}

.el-table__row:hover {
    .controls {
        visibility: visible;
    }
}
</style>