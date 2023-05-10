<template>
    <div class="footer">
        <div class="footer-top">
            <div class="author">
                <div class="author-info">
                    <img class="author-icon"
                        src="https://media.licdn.com/dms/image/D4E35AQFE4Fju2XWiQQ/profile-framedphoto-shrink_400_400/0/1682076487853?e=1684339200&v=beta&t=th5yhPst0dJPA4c65JziH4HbSkWxr1JjVmg91C4qAVg" />
                    <el-link :underline="false" href="https://www.linkedin.com/in/alyona-tyunyaeva/" target="_blank">
                        Alyona Tyunyaeva
                    </el-link>
                </div>
                <p class="author-description">
                    Bringing your digital vision to life with passion and precision
                </p>
            </div>
            <div class="contacts">
                <el-link :underline="false" href="https://github.com/alyonatyunyaeva/roster" target="_blank">
                    <img class="contact-icon" src="/github.png" /> GitHub
                </el-link>
                <el-link :underline="false" href="https://www.linkedin.com/in/alyona-tyunyaeva/" target="_blank">
                    <img class="contact-icon" src="/linkedin.png" /> LinkedIn
                </el-link>
                <el-link :underline="false" href="https://t.me/tyunyaevaa" target="_blank">
                    <img class="contact-icon" src="/telegram.png" /> telegram
                </el-link>

            </div>
        </div>
        <div class="footer-bottom">
            <p> {{ currentYear() }}, Yerevan</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer {
    background-color: #faf4ec;
    font-weight: 300;
    padding: 40px 30px 10px;
}

.footer-top {
    display: flex;
    justify-content: space-between;
}

.author,
.author-info {
    display: inline-flex;
    align-items: left;
    flex-direction: column;
    justify-content: flex-start;
}

.author-info {
    flex-direction: row;
}

.author-description {
    font-size: 14px;
}

.author-icon,
.contact-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
}

.contacts {
    display: flex;
    gap: 20px;

    .el-link {
        font-size: 18px;
    }
}

.footer-bottom {
    display: flex;
    justify-content: end;
}
</style>