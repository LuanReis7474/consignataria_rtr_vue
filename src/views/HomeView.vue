<template>
  <div class="home">

    <section id="intro">
      <div class="intro-content">
        <h2>Bem-vindo à Fazenda do Campo</h2>
        <p>A Fazenda do Campo é o lugar ideal para quem ama a natureza e deseja conhecer a vida no campo. Venha
          explorar e se encantar com a vida rural!</p>
        <div class="images">
          <img src="https://via.placeholder.com/400x250.png?text=Porco+1" alt="Porco 1" class="farm-image">
          <img src="https://via.placeholder.com/400x250.png?text=Porco+2" alt="Porco 2" class="farm-image">
          <img src="https://via.placeholder.com/400x250.png?text=Porco+3" alt="Porco 3" class="farm-image">
        </div>
      </div>
    </section>

    <section id="symbols">
      <h2>Nossos Símbolos</h2>
      <div class="symbol-container">
        <div class="symbol">
          <p class="icon">🐖</p>
          <p class="description">Porcos</p>
        </div>
        <div class="symbol">
          <p class="icon">🌾</p>
          <p class="description">Grãos</p>
        </div>
        <div class="symbol">
          <p class="icon">🚜</p>
          <p class="description">Tratores</p>
        </div>
      </div>
    </section>

    <section id="info">
      <h2>Informações Adicionais</h2>
      <p>Descubra a beleza da vida no campo com uma visita à Fazenda do Campo. Oferecemos passeios guiados, atividades
        agrícolas e a oportunidade de se conectar com a natureza.</p>
      <div class="info-images">
        <img src="https://via.placeholder.com/300x200.png?text=Passeio+1" alt="Passeio 1" class="info-image">
        <img src="https://via.placeholder.com/300x200.png?text=Passeio+2" alt="Passeio 2" class="info-image">
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

.home {
  padding: 20px;
  background-color: #f9f9f9;
}

section {
  margin-bottom: 40px;
}

.intro-content {
  text-align: center;
}

.intro-content h2 {
  font-size: 2rem;
  color: #4a4a4a;
}

.intro-content p {
  font-size: 1rem;
  color: #666;
  margin: 0 auto;
  max-width: 800px;
}

.images {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.farm-image {
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

#symbols {
  background-color: #e2f0d9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

#symbols h2 {
  font-size: 2rem;
  color: #4a4a4a;
}

.symbol-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.symbol {
  text-align: center;
}

.icon {
  font-size: 4rem;
}

.description {
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
}

#info {
  text-align: center;
}

#info h2 {
  font-size: 2rem;
  color: #4a4a4a;
}

#info p {
  font-size: 1rem;
  color: #666;
  margin: 0 auto;
  max-width: 800px;
}

.info-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.info-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
