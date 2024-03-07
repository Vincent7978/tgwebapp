import './assets/main.css'
import 'vant/lib/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Swipe, SwipeItem } from 'vant'

const app = createApp(App)

app.use(router);
app.use(Button);
// app.use(Tabs);
// app.use(Tab);
app.use(Swipe);
app.use(SwipeItem);

app.mount('#app')
