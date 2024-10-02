<template>
  <header class="site-header">
      <div class="site-logo">
        <img src="../assets/logo2.png" style="margin-top: -30px;">
      </div>
      <nav class="site-nav">
        <ul>
          <li @click="changePage('home')"><a >Home</a></li>
          <li @click="changePage('about')"><a >Sobre nós</a></li>
          <li @click="changePage('services')"><a>Serviços</a></li>
          <li @click="changePage('contact')"><a>Contatos</a></li>
        </ul>
      </nav>
      <div class="search-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.34 5.01 12.36 2 8.67 2S2 5.01 2 8.67c0 3.66 2.99 6.67 6.67 6.67 1.61 0 3.09-.56 4.27-1.48l.27.28v.79l4.25 4.25c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L15.5 14zm-6.83 0C6.01 14 4 11.99 4 9.67c0-2.32 2.01-4.33 4.67-4.33 2.32 0 4.33 2.01 4.33 4.33 0 2.32-2.01 4.33-4.33 4.33z" />
        </svg>
      </div>
      <div id="google_translate_element"></div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  mounted() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'pt', includedLanguages: 'es,pt' },
        'google_translate_element'
      );
    };
  },
  methods: {
    changePage(rota) {
      if (rota === 'home') {
        this.$router.push('/home');
      } else if (rota === 'about') {
        this.$router.push('/about');
      } else if (rota === 'services') {
        this.$router.push('/services');
      }  else if (rota === 'contact') {
        this.$router.push('/contact');
      }
    }
  }
}
</script>

<style scoped>
.search-icon {
  display: flex;
  align-items: center;
}

.search-icon svg {
  width: 24px;
  height: 24px;
  fill: black;
}

.search-icon:hover svg {
  fill: #ccc;
}

.site-header {
  height: 100px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  display:flex;
  
}

.site-logo{
  
}



/* Navegação */
.site-nav {
  margin-left: auto;
  margin-right: 15px;
  padding-right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
}

.site-nav ul {
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.site-nav li {
  cursor: pointer;
  width:max-content;
  position: relative;
  margin: 0; 
  display: grid;
  place-items: center; 
  padding-left: 5px; 
  padding-right: 5px; 
}

.site-nav a {
  text-decoration: none;
  color: black;
  display: block;
  
}

.site-nav li:hover {
  background-color: #e5e5e5;
}

/* Efeito Hover */
.site-nav li:hover a {
  background-color: transparent;
}
</style>
