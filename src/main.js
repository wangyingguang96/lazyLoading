// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  //注意，假如图片是放在assets目录下，要使用require()加载图片。假如放在static目录下，直接写路径即可
  error: 'http://img2.imgtn.bdimg.com/it/u=1502174773,3523313441&fm=26&gp=0.jpg',
  loading: 'http://img.zcool.cn/community/01491557e1e0f00000012e7e66d689.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
