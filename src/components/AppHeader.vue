<template>
  <header class="site-header">
    <div class="site-logo">
      <img src="../assets/logo.png" alt="Logo">
    </div>
    <nav class="site-nav">
      <ul>
        <li>
          <router-link :to="{ path: '/landing-page', hash: '#section-1' }">
            {{ $t('header.home') }} <!-- Texto traduzido -->
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/landing-page', hash: '#section-2' }">
            {{ $t('header.about') }} <!-- Texto traduzido -->
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/landing-page', hash: '#section-3' }">
            {{ $t('header.services') }} <!-- Texto traduzido -->
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="button-contact">
      <router-link to="/contato">
        <button>
          {{ $t('header.contact') }}
        </button>
      </router-link> <!-- Texto traduzido -->
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
  <nav class="mobile-nav" v-if="isMenuOpen">
    <ul>
      <li><a href="#home">{{ $t('header.home') }}</a></li> <!-- Texto traduzido -->
      <li><a href="#about">{{ $t('header.about') }}</a></li> <!-- Texto traduzido -->
      <li><a href="#services">{{ $t('header.services') }}</a></li> <!-- Texto traduzido -->
    </ul>
    <div class="button-contact-mobile">
      <button>
         <router-link to="/contato">{{ $t('header.contact') }}</router-link>
      </button> <!-- Texto traduzido -->
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
  padding: 0 5.5vw;
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
  margin: 0 2vw;
}

.site-nav a {
  font-family: 'Raleway';
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: black;
  display: block;
}

.button-contact {
  margin-left: 10px;
}

.button-contact button {
  cursor: pointer;
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
  margin-bottom: 10px;
}

.button-contact-mobile button {
  cursor: pointer;
  width: max-content !important;
  height: 36px;
  background-color: #204E51;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
}

@media (max-width: 768px) {
  .button-contact {
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
