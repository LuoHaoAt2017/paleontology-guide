
import HelloWorld from './components/HelloWorld.vue';

const items = [
  HelloWorld
];

const install = function(Vue) {
  items.forEach(elem => {
    Vue.component(elem.name, elem);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWorld
}