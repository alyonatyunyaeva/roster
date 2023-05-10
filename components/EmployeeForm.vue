<template>
    <div class="form-container">
        <el-form ref="employeeFormRef" :rules="rules" :model="employeeForm" label-width="auto" size="large"
            label-position="right">
            <el-form-item label="Name" prop="name">
                <el-input v-model="employeeForm.name" />
            </el-form-item>
            <el-form-item label="Surname" prop="surname">
                <el-input v-model="employeeForm.surname" />
            </el-form-item>
            <el-form-item label="Birthdate" prop="birthdate">
                <el-date-picker value-format="YYYY-MM-DD" v-model="employeeForm.birthdate" type="date" style="width: 100%"
                    label="Pick a date" :disabled-date="isFutureDate" placeholder="Pick a date" />
            </el-form-item>
            <el-form-item label="Age" readonly>
                <el-input :value="age" />
            </el-form-item>
            <el-form-item label="Address" prop="address">
                <el-input v-model="employeeForm.address" />
            </el-form-item>
            <el-form-item label="Employment date" prop="employmentDate">
                <el-date-picker value-format="YYYY-MM-DD" :disabled-date="isFutureDate"
                    v-model="employeeForm.employmentDate" type="date" style="width: 100%" label="Pick a date"
                    placeholder="Pick a date" />
            </el-form-item>
            <el-form-item label="Experience">
                <el-input :value="experience" readonly />
            </el-form-item>
            <div class="submitButton">
                <el-button size='large' @click="submitForm(employeeFormRef)">{{ buttonTitle }}</el-button>
            </div>
        </el-form>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { IEmployee } from '~/types'

import type { FormInstance, FormRules } from 'element-plus'

const props = defineProps<{
    employee: IEmployee,
    buttonTitle: string,
}>();

const emits = defineEmits(['submit'])
const employeeFormRef = ref<FormInstance>()
const employeeForm = reactive(props.employee);

const age = computed(() => {
    return employeeForm.birthdate ? calculateDifInYears(employeeForm.birthdate) : ''
})
const experience = computed(() => {
    return employeeForm.employmentDate ? calculateExperience(employeeForm.employmentDate) : ''
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            emits('submit')
        } else {
            console.log('error submit!', fields)
        }
    })

}

const rules = reactive<FormRules>({
    name: [
        { required: true, message: 'Please input  Employee Name', trigger: 'blur' },
    ],
    surname: [
        { required: true, message: 'Please input  Employee Surname', trigger: 'blur' },
    ],
    birthdate: [
        { required: true, message: 'Please input  Employee Birthdate', trigger: 'blur' },
    ],
    address: [
        { required: true, message: 'Please input  Employee Address', trigger: 'blur' },
    ],
    employmentDate: [
        { required: true, message: 'Please input  Employment Date', trigger: 'blur' },
    ]
})

</script>

<style>
.form-container {
    padding: 40px 20px;
}

.el-input__wrapper {
    display: flex;
}

.submitButton {
    display: flex;
    padding: 20px;
    justify-content: center;
}
</style>