import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vconsole from 'vconsole';
// 添加手机端调试vConsole
if (process.env.NODE_ENV === 'development') {
  new Vconsole();
}

// 移动端适配
import 'lib-flexible/flexible.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
