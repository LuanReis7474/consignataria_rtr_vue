<template>
  <div class="home">
    <div class="banner-intro">
      <img src="../assets/gado-de-corte-capa.jpeg" alt="gado">

      <div class="action-buttons">
          <button class="btn-action">Saiba mais</button>
          <button class="btn-action">Entre em contato</button>
      </div>
    </div>

    <section id="intro">
      <div class="intro-content">
        <img class="img-intro" src="../assets/thumbnail.png" alt="gado">
      
        <div class="text-intro">
          <h3>Conectando você ao melhor em compra e venda de gado com confiança e segurança.</h3>
        </div>
       </div>
    </section>

    <section id="info-container">
      <h3>Nossos Valores</h3>
      <div class="infos">
        <p>Na Consignataria RTR, nossos valores são a base de tudo o que fazemos. Comprometemo-nos com a integridade, transparência e excelência no atendimento, buscando sempre superar as expectativas de nossos clientes e parceiros.</p>
      </div>
    </section>

    <section id="info-container">
      <h3>Nossa missão</h3>
      <div class="infos">
        <p>Nossa missão é proporcionar um serviço de compra e venda de gado que seja eficiente, seguro e confiável. Trabalhamos para conectar produtores e frigoríficos com a máxima transparência e profissionalismo.</p>
      </div>
    </section>
  </div>
</template>


<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
#intro {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh;
}

.intro-content {
  position: relative; 
}

.text-intro {
  position: absolute;
  bottom: -10px; 
  right: -10px; 
  background-color: #e5e5e5;
  padding: 10px;
  border-radius: 5px;
  margin-left: 300px;
}

.img-intro {
  border-radius: 20px;
  width: 724px;
  height: 543px;
 }


.banner-intro {
  position: relative;
  width: 100%;
}

.banner-intro img {
  width: 100%;
  height: auto;
  display: block;
}

.action-buttons {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.btn-action {
  margin-right: 5px;
  background-color: white;
  color: #333;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-action:hover {
  background-color: #333;
  color: white;
}

#info-container {
  margin-top: 30px;
  background-color:#e5e5e5;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-left:10px;
  margin-right: 10px;
}

#info-container h2 {
  font-size: 2rem;
  color: #4a4a4a;
}

.infos {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}


</style>
