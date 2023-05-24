import VueSmoothScroll from 'v-smooth-scroll';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSmoothScroll);
});
