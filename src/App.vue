<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
  <AppFooter></AppFooter>
</template>

<script>
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

h1{
  font-size:25pt;
}

h2{
  font-size:22pt;
}

h3{
  font-size:18pt;
}

p{
  font-size: 14pt;
}
</style>
