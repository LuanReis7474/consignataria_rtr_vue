<template>
  <header class="site-header">
    <div class="site-logo">
      <img src="../assets/logo.png" alt="Logo">
    </div>
    <nav class="site-nav">
      <ul>
        <li @click="changePage('home')"><a><b>Home</b></a></li>
        <li @click="changePage('about')"><a><b>Sobre nós</b></a></li>
        <li @click="changePage('services')"><a><b>Serviços</b></a></li>
      </ul>
    </nav>
    <div class="button-contact">
      <button>Fale Conosco</button>
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
  <nav class="mobile-nav" v-if="isMenuOpen">
    <ul>
      <li @click="changePage('home')"><a>Home</a></li>
      <li @click="changePage('about')"><a>Sobre nós</a></li>
      <li @click="changePage('services')"><a>Serviços</a></li>
    </ul>
    <div class="button-contact-mobile">
      <button>Fale Conosco</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    changePage(rota) {
      this.isMenuOpen = false; 
      this.$router.push(`/${rota}`);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.site-header {
  height: 142px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.site-logo {
  flex: 0 1 auto; 
}

.site-nav {
  flex: 1; 
  display: flex;
  justify-content: center; 
}

.site-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-nav li {
  cursor: pointer;
  margin: 0 10px;
}

.site-nav a {
  text-decoration: none;
  color: black;
  display: block;
}

.button-contact {
  margin-left: 10px;
}

.button-contact button {
  width: 159px;
  height: 48px;
  background-color: #204E51;
  font-size: 20px;
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
}

.menu-toggle {
  display: none; 
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle span {
  height: 4px;
  width: 30px;
  background: black;
  margin: 3px 0;
}

.mobile-nav {
  display: none; 
}

.mobile-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.button-contact-mobile {
  margin-top: 10px; 
  display: flex;
  justify-content: center;
  margin-bottom:10px;
}

.button-contact-mobile button {
  width: max-content !important;
  height: 36px; 
  background-color: #204E51;
  font-size: 16px; 
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
}

@media (max-width: 768px) {
  .button-contact
  {
    display: none;
  }
  .site-nav {
    display: none; 
  }
  
  .menu-toggle {
    display: flex; 
  }
  
  .mobile-nav {
    display: block; 
    position: absolute;
    top: 142px; 
    left: 0;
    right: 0;
    background-color: white;
    border-bottom: 1px solid #ccc;
    z-index: 10; 
  }
}
</style>
