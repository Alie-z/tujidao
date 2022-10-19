import { createSSRApp } from 'vue';
import App from './App.vue';
import 'vant/lib/index.css';

export const createApp = () => {
    const app = createSSRApp(App);
    return { app };
};
