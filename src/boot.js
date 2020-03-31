import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("fa-icon", FontAwesomeIcon);
library.add(faGithub, faFacebook, faChrome, faPlayCircle);


Vue.config.productionTip = false

let v = new Vue({
  el: "#app",
  router: Router,
  components: { App },
  template: `<App/>`
});
