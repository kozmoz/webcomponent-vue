import Vue from 'vue';
import App from './App.vue';
// Polyfills for webcomponent support older browsers.
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import './webcomponents/IncrementButton';

Vue.config.productionTip = false;

// Bootstrap VueJS app.
new Vue({
    render: h => h(App),
}).$mount('#app');
