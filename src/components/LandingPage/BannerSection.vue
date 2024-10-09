<template>
 <div class="banner-initial">
    <div class="text-banner">
        <h1><b>Consolidada no<br> mercado de compra e venda de gado</b></h1>
        <p>Com uma sólida experiência no setor, nossa missão é oferecer soluções completas<br>
        para nossos clientes, desde a aquisição e transporte até o acompanhamento do abate</p>
    
        <div class="button-contact">
          <button>Entre em contato</button>
        </div>
    </div>
    
    <img src="../../assets/banner.png" alt="Banner">
 </div>
</template>

<script>
export default {
  name: 'BannerSection',
  components: {}
}
</script>

<style scoped>
.button-contact {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button-contact button {
  width: max-content;
  height: 48px;
  background-color: #204E51;
  font-size: 1rem; /* Ajuste usando rem */
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
}

.banner-initial {
  position: relative;
  width: 100%;
  overflow: hidden; /* Para garantir que só o recorte da imagem seja exibido */
}

.banner-initial img {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 0;
}

.banner-initial .text-banner {
  position: absolute;
  top: 70px;
  width: 78%;
  z-index: 9;
  left: 11%;
  right: 11%;
}

h1 {
  text-align: center;
  font-size: 5rem; /* Responsivo com rem */
  color: white;
}

p {
  text-align: center;
  font-size: 1rem; /* Responsivo com rem */
  color: white;
}

.banner-initial::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1E1E1E;
  opacity: 0.6; /* 60% de transparência */
  z-index: 1;
}

/* Media queries para responsividade abaixo de 1024px */
@media (max-width: 1024px) {
  .banner-initial {
    height: 400px; /* Altura fixa para garantir o recorte */
  }

  .banner-initial img {
    width: 100vw; /* Garante que a imagem ocupe a largura da tela */
    height: 100%;
    object-fit: cover; /* Mantém a proporção da imagem e permite o recorte */
    object-position: center; /* Recorte centralizado */
  }

  h1 {
    font-size: 2.5rem; /* Diminui tamanho no tablet */
  }

  p {
    font-size: 1rem; /* Texto menor */
  }

  .banner-initial .text-banner {
    position: absolute;
    top: 10px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem; /* Diminui mais no mobile */
  }

  p {
    font-size: 0.875rem; /* Texto menor no mobile */
  }
}

@media (max-width: 480px) {
  .banner-initial {
    width: 100%;
    height: 300px; /* Altura menor para caber no mobile */
  }

  h1 {
    font-size: 1.5rem; /* Texto principal reduzido para caber na tela */
  }

  p {
    font-size: 0.75rem; /* Texto menor */
  }

  .button-contact button {
    font-size: 0.875rem; /* Ajusta tamanho do botão no mobile */
    height: 40px; /* Ajusta altura do botão no mobile */
  }
}
</style>
