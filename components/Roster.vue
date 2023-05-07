<template>
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="Name" prop="name" />
        <el-table-column label="Surname" prop="surname" />
        <el-table-column label="Experience" prop="experience" />
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
</template>

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
  
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from "vue-router";
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { IEmployee } from '~/types';


const router = useRouter();
const navigateToPage = (id: number | string) => {
    router.push({
        name: 'edit-id',
        params: { id }
    });
};
const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: IEmployee) => {
    navigateToPage(row.id)
}
const handleDelete = (index: number, row: IEmployee) => {
    console.log(index, row)
}

const tableData: IEmployee[] = [
    {
        "id": "1",
        "name": "John",
        "surname": "Doe",
        "age": 32,
        "address": "123 Main St, Anytown, USA",
        "employmentDate": "2020-01-01"
    },
    {
        "id": "2",
        "name": "Jane",
        "surname": "Doe",
        "age": 28,
        "address": "456 Elm St, Anytown, USA",
        "employmentDate": "2020-02-01"
    },
    {
        "id": "3",
        "name": "Bob",
        "surname": "Smith",
        "age": 45,
        "address": "789 Oak St, Anytown, USA",
        "employmentDate": "2019-12-01"
    },
    {
        "id": "4",
        "name": "Alice",
        "surname": "Johnson",
        "age": 27,
        "address": "321 Maple St, Anytown, USA",
        "employmentDate": "2021-03-01"
    },
    {
        "id": "5",
        "name": "Jack",
        "surname": "Jones",
        "age": 38,
        "address": "654 Pine St, Anytown, USA",
        "employmentDate": "2020-11-01"
    },
    {
        "id": "6",
        "name": "Jill",
        "surname": "Johnson",
        "age": 31,
        "address": "987 Cedar St, Anytown, USA",
        "employmentDate": "2018-10-01"
    },
    {
        "id": "7",
        "name": "Sam",
        "surname": "Smith",
        "age": 49,
        "address": "246 Birch St, Anytown, USA",
        "employmentDate": "2022-02-01"
    },
    {
        "id": "8",
        "name": "Sara",
        "surname": "Davis",
        "age": 24,
        "address": "753 Spruce St, Anytown, USA",
        "employmentDate": "2021-07-01"
    },
    {
        "id": "9",
        "name": "Tom",
        "surname": "Jones",
        "age": 36,
        "address": "159 Cedar St, Anytown, USA",
        "employmentDate": "2017-09-01"
    },
    {
        "id": "10",
        "name": "Lisa",
        "surname": "Smith",
        "age": 29,
        "address": "753 Maple St, Anytown, USA",
        "employmentDate": "2022-05-01"
    }
]

</script>
  
