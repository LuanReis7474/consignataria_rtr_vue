<template>
  <AppHeader></AppHeader>
  <router-view />
  <AppFooter></AppFooter>
</template>

<script>
// Importando os componentes
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
*{
  font-family: Montserrat;
}
</style>
