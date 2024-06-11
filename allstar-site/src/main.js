import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'normalize.css/normalize.css'
import i18n from './i18n'
import * as ElIcons from "@element-plus/icons-vue";
const app = createApp(App);

// 设置网站标题
document.title = '珠海全星医疗科技有限公司';

for (const name in ElIcons) {
    app.component(name, ElIcons[name]);
}

app.use(router).use(i18n).mount('#app')
