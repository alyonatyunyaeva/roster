<template>
    <div class="container">
        <el-header>
            <Header />
        </el-header>
        <el-main class="content">
            <slot />
        </el-main>
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1 0 auto;
    min-height: 100vh;
}

.footer {
    flex: 0 0 auto;
}
</style>