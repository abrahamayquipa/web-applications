import { createApp } from "vue";
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";

import App from "./App.vue";

import Button from 'primevue/button';
import Card from 'primevue/card';

const app = createApp(App);

app.component('Button', Button);
app.component('Card', Card);

app.use(PrimeVue, { ripple: true });

app.mount("#app");
