<template>
  <div class="home">

    <section id="intro">
      <div class="intro-content">
        <div class="text-intro">
          <h2>Conectando você ao melhor em compra e venda de gado com confiança e segurança.</h2>
        </div>
        
        <div class="images">
          <img class="img-intro" src="../assets/thumbnail.png" alt="Gados">
          <!-- Botões -->
          <div class="action-buttons">
            <button class="btn-action">Saiba mais</button>
            <button class="btn-action">Entre em contato</button>
          </div>
        </div>
      </div>
    </section>

    <section id="info-container">
      <h2>Nossos Valores</h2>
      <div class="infos">
        <p>Na Consignataria RTR, nossos valores são a base de tudo o que fazemos. Comprometemo-nos com a integridade, transparência e excelência no atendimento, buscando sempre superar as expectativas de nossos clientes e parceiros.</p>
      </div>
    </section>

    <section id="info-container">
      <h2>Nossa missão</h2>
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
/* styles.css */
.images {
  padding: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.intro-content{
  display: flex;
}

.img-intro {
  border-radius: 20px;
  width: 724px;
  height: 543px;
}

.action-buttons {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
}

.btn-action {
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
  background-color: #e2f0d9;
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

.text-intro{
  display: flex;
  align-items: center;
  text-align: center;
}

</style>
