<template>
  <footer class="footer">
    <div class="container">
     <nav>
        <ul>
          <li @click="changePage('home')"><a>Home</a></li>
          <li @click="changePage('about')"><a>Sobre nós</a></li>
          <li @click="changePage('services')"><a>Serviços</a></li>
          <li @click="changePage('contact')"><a>Contatos</a></li>
        </ul>
      </nav>

      <div class="bottom-text">
        <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
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
.footer {
  height: 200px;
  margin-top:30px;
  background-color: #242e3d;
  color: white;
  padding: 20px 0;
  text-align: center;
}

nav{
    margin-bottom: 140px;
}
nav ul li{
    list-style: none;
    cursor: pointer;
    
}

nav ul{
    display: flex; 
}

.footer a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 15px;
}

.footer a:hover {
  text-decoration: underline;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.bottom-text{
}
</style>
