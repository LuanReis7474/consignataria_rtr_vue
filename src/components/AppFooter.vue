<template>
  <footer class="footer">
    <div class="container">
     <nav>
        <ul>
          <li><a href="/sobre">Home</a></li>
          <li><a href="/contato">Sobre nós</a></li>
          <li><a href="/politica-de-privacidade">Serviços</a></li>
          <li><a href="/politica-de-privacidade">Contatos</a></li>
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
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  height: 200px;
  margin-top:30px;
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

nav{
    margin-bottom: 140px;
}
nav ul li{
    list-style: none;
    
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
