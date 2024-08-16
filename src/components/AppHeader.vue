<template>
  <header class="site-header">
    <div class="container">
      <h1 class="site-title">Consignaria RTR</h1>
      <nav class="site-nav">
        <ul>
          <li><a @click="changePage('home')">Home</a></li>

          <li><a @click="changePage('about')">Sobre nós</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contatos</a></li>
        </ul>
      </nav>
      <div class="search-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.34 5.01 12.36 2 8.67 2S2 5.01 2 8.67c0 3.66 2.99 6.67 6.67 6.67 1.61 0 3.09-.56 4.27-1.48l.27.28v.79l4.25 4.25c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L15.5 14zm-6.83 0C6.01 14 4 11.99 4 9.67c0-2.32 2.01-4.33 4.67-4.33 2.32 0 4.33 2.01 4.33 4.33 0 2.32-2.01 4.33-4.33 4.33z" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  },
  methods: {
    changePage(rota) {
      if (rota == 'home')
        this.$router.push('/home');
      else if (rota == 'about')
        this.$router.push('/about');
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

/* Cabeçalho */
.site-header {
  background-color: white;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.site-title {
  margin: 0;
  font-size: 24px;
}

/* Navegação */
.site-nav {
  margin-left: auto;
}

.site-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.site-nav li {
  margin: 0 15px;
  position: relative;
}

.site-nav a {
  text-decoration: none;
  color: black;
  padding: 10px;
  display: block;
  height: 100%;
}

.site-nav li:hover {
  background-color: #ccc;
}

/* Dropdown Menu */
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  width: max-content;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  padding: 10px;
  white-space: nowrap;
  display: block;
}

/* Ícone de Pesquisa */
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
</style>
