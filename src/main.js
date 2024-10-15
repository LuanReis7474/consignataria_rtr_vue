import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import { messages } from './locales/locales';

const i18n = createI18n({
    locale: 'pt', // Define o idioma padrão
    fallbackLocale: 'pt', // Define o idioma padrão de fallback
    messages, // As mensagens de tradução
});


const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount('#app');
