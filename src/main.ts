import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from './volt/Button.vue';

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true
});
app
  .component('VoltButton', Button)


app.mount('#app')