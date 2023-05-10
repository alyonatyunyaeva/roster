<template>
    <div class="form-layout">
        <div class="form-header">
            <h2>
                <slot name="header">
                    welcome to employee form!
                </slot>
            </h2>
            <nav>
                <el-button :icon='Back' @click="handleClickBack">Back</el-button>
            </nav>
        </div>
        <main class="form-content">
            <slot />
        </main>
    </div>
</template>

<script setup>
import { Back } from '@element-plus/icons-vue'
const layout = "form-layout";
const router = useRouter()

const handleClickBack = () => {
    router.back()
}

</script>

<style scoped>
.form-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-header,
.form-content {
    min-width: 450px
}
</style>