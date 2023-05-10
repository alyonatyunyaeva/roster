<template>
    <div>
        <div class="search-container">
            <el-input v-model="search" size="large" placeholder="Type to search" />
        </div>
        <el-table :data="filterTableData" style="width: 100%">
            <el-table-column sortable label="Name" prop="name" />
            <el-table-column sortable label="Surname" prop="surname" />
            <el-table-column sortable label="EmploymentDate" prop="employmentDate" width="180" />
            <el-table-column sortable label="Experience" prop="experience" width="180">
                <template #default="scope">{{ calculateDifInYears(scope.row.employmentDate) }}</template>
            </el-table-column>
            <el-table-column sortable label="Age" width="130">
                <template #default="scope">{{ calculateDifInYears(scope.row.birthdate) }}</template>
            </el-table-column>
            <el-table-column label="Address" prop="address" />
            <el-table-column align="right" width="130">
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

const { employees, removeEmployee } = useGetEmpoyees()
const { setEmployeeDetail } = useEmpoyeeDetail()
const router = useRouter();
const search = ref('')

const filterTableData = computed(() =>
    employees.value.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase()) ||
            data.surname.toLowerCase().includes(search.value.toLowerCase())
    )
)

const navigateToEditPage = (id: string) => {
    router.push({
        name: 'edit-id',
        params: { id }
    });
};

const handleEdit = (index: number, row: IEmployee) => {
    setEmployeeDetail(row)
    navigateToEditPage(row.id || '')
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

.search-container {
    width: 40%;
    padding: 10px 0 20px;
}
</style>