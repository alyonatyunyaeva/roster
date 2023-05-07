// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: "https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;500;700&display=swap" 
                  },
                  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

            ]
        }
    },
    
    modules: ['@element-plus/nuxt']
})
