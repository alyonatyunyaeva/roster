<template>
    <div>
        <h1>Edit page</h1>
        <el-form label-width="100px" :model="employeeForm" style="max-width: 460px">
            <el-form-item label="Name">
                <el-input v-model="employeeForm.name" />
            </el-form-item>
            <el-form-item label="surname">
                <el-input v-model="employeeForm.surname" />
            </el-form-item>
            <el-form-item label="address">
                <el-input v-model="employeeForm.address" />
            </el-form-item>
            <el-form-item label="experience">
                <el-input v-model="employeeForm.experience" />
            </el-form-item>
            <el-form-item label="age">
                <el-input v-model="employeeForm.age" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { IEmployee } from '~/types'

// defineProps<any>()

const employeeForm = reactive({
    id: '',
    surname: '',
    name: '',
    address: '',
    experience: '',
    age: '',
})
</script>