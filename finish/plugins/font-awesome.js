import Vue from "vue";
import {
  library
} from "@fortawesome/fontawesome-svg-core";

import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
  faEye,
  faEyeSlash
} from "@fortawesome/free-regular-svg-icons";

library.add({
  faEye,
  faEyeSlash
});
Vue.component("font-awesome-icon", FontAwesomeIcon);
