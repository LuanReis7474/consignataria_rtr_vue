<template>
  <div class="content-section">
    <!-- Seção à esquerda -->
    <div class="text-section">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="button-contact">
        <button>{{ buttonText }}</button>
      </div>
    </div>

    <!-- Seção à direita -->
    <div class="image-section">
      <img src="../../assets/gado-andando.png" alt="Imagem Descrição" />
      <input type="text" placeholder="Digite aqui" class="image-textbox" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      title: "Proporcionando um serviço de compra e venda de gado que seja eficiente, seguro e confiável",
      description: "Trabalhamos para conectar produtores e frigoríficos com a máxima transparência e profissionalismo",
      buttonText: "Entre em contato"
    };
  }
};
</script>

<style scoped>
/* Layout geral */
.content-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

/* Estilo da seção de texto (à esquerda) */
.text-section {
  width: 45%;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.125rem;
  margin-bottom: 20px;
}

.button-contact {
  display: flex;
  justify-content: flex-start;
}

.button-contact button {
  width: max-content;
  height: 48px;
  background-color: #204E51;
  font-size: 1.25rem;
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.button-contact button:hover {
  background-color: #176c6e;
}

/* Estilo da seção de imagem (à direita) */
.image-section {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-section img {
  width: 100%;
  height: auto;
  max-width: 400px;
  object-fit: cover;
}

.image-textbox {
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .content-section {
    flex-direction: column;
    text-align: center;
  }

  .text-section, .image-section {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .button-contact button {
    font-size: 1rem;
    height: 40px;
  }

  .image-section img {
    max-width: 300px;
  }

  .image-textbox {
    max-width: 300px;
  }
}
</style>
