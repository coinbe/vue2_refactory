import Vue from 'vue';
import App from './App.vue';

import { router } from '@/routes/';
import { store } from '@/store/';

// bootstrap
import BootstrapVue from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
