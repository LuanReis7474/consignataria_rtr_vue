<template>
  <div class="banner">
    <img src="@/assets/fotoGado.jpg" alt="Banner" class="banner-image">
    <div class="overlay"></div>
    <div class="content">
      <h1 class="banner-title">Referência em<br>intermediação e transporte<br>de gado na LATAM</h1>
      <div class="button-container">
        <div class="button-contact">
          <button>Saiba Mais</button>
        </div>
        <div class="button-contact">
          <button>Fale Conosco</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
}
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 629px;
  overflow: hidden;

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* A imagem será ajustada */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Camada preta com 60% de transparência */
  }

  .content {
    position: absolute;
    top: 0;
    left: 93px; /* Distância da margem esquerda */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* Alinhado à esquerda */
    text-align: left;
    color: #FFFFFF;
  }

  .banner-title {
    font-size: 72px;
    margin-bottom: 20px;
  }

  .button-container {
    display: flex;
    gap: 20px;
  }

  .button-contact button {
    width: max-content;
    height: 48px;
    background-color: #204E51;
    font-size: 1rem;
    color: #FFFFFF;
    border-radius: 8px;
    border: none;
    padding: 0 20px;
  }

  /* Estilos responsivos */
  @media (max-width: 1024px) {
    .content {
      left: 50px; /* Ajustando a distância da margem esquerda em telas menores */
    }

    .banner-title {
      font-size: 48px; /* Reduzindo o tamanho da fonte em dispositivos móveis */
    }

    .button-contact button {
      height: 40px; /* Ajustando o tamanho do botão */
      font-size: 0.875rem;
    }
  }

  @media (max-width: 768px) {
    .content {
      left: 20px; /* Mais redução da margem em dispositivos menores */
    }

    .banner-title {
      font-size: 36px; /* Mais redução no título */
    }

    .button-contact button {
      height: 36px;
      font-size: 0.75rem;
    }
  }
}
</style>
