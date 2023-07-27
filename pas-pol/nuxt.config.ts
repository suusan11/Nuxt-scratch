// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: 'src/',
    css: ["@/assets/scss/style.scss"],
    app: {
        head: {
            title: 'PAS-POL -旅のモノづくりブランド-｜TABIPPO',
            meta: [{ name: 'description', content: 'PAS-POLはTABIPPOのモノづくりブランドです。 ⾃分と世界を繋げる新しい時代のパスポートのようなモノを作りたいと思い、PAS-POLという名前をつけました。' }],
            // link: [{ rel: 'icon', href: '/icon.png' }],
        },
        // baseURL: '/spa/',
    },
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@nuxt/image',
        '@nuxtjs/device',
    ],
    googleFonts: {
        families: {
            'Montserrat': [300,400,500],
        },
        display: 'swap'
    },
    image: {
        dir: '~/assets/images',
        // 以下の値を上書き可能
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    }
})