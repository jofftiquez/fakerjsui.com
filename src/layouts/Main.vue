<template>
<div data-theme="fakerjsui">
  <app-navbar/>
    <slot/>
  <app-footer/>
</div>
</template>

<script>
import AppNavbar from '../components/commons/Navbar.vue';
import AppFooter from '../components/commons/Footer.vue';

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>
