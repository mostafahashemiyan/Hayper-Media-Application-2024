// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [    
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  supabase: {
    redirect: false,
  },
  app: {
    head: {
      title: 'Polimi Summer School',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Polimi Summer School for the programming data science and machine learning courses' }
      ],
    }
  }
})
