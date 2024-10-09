<template>
  <div class="container">
    <!-- Seção Esquerda: Título, Descrição e Botão -->
    <div class="left-content">
      <h1 class="title">Título Grande</h1>
      <p class="description">Descrição abaixo com tamanho 36px.</p>
      <div class="button-contact">
        <button>Clique Aqui</button>
      </div>
    </div>

    <!-- Seção Direita: Box com Itens -->
    <div class="right-box">
      <div class="box-item" v-for="(item, index) in items" :key="index">
        <img :src="item.icon" alt="Ícone" class="icon">
        <p class="item-text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitsSection',
  data() {
    return {
      items: [
        { icon: '@/assets/logo.png', text: 'Texto do Item 1' },
        { icon: '@/assets/logo.png', text: 'Texto do Item 2' },
        { icon: '@/assets/logo.png', text: 'Texto do Item 3' },
        { icon: '@/assets/logo.png', text: 'Texto do Item 4' },
      ]
    };
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Responsividade */
  padding: 20px;
}

/* Seção Esquerda */
.left-content {
  flex: 1;
  max-width: 50%; /* Ocupará até metade da largura */
}

.title {
  font-size: 72px;
  color: #000000;
  margin-bottom: 20px;
}

.description {
  font-size: 36px;
  color: #555555;
  margin-bottom: 40px;
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

/* Seção Direita */
.right-box {
  background-color: #204E51;
  width: 670px;
  height: 785px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}

.box-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon {
  width: 40px;
  height: 40px;
}

.item-text {
  color: #FFFFFF;
  font-size: 1.5rem;
}

/* Responsividade */
@media (max-width: 1024px) {
  .left-content {
    max-width: 100%; /* Ocupará 100% da largura em telas menores */
  }

  .title {
    font-size: 48px; /* Reduzindo o tamanho da fonte em dispositivos menores */
  }

  .description {
    font-size: 24px;
  }

  .right-box {
    width: 100%;
    height: auto; /* Ajusta a altura para conteúdos variáveis */
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .item-text {
    font-size: 1.25rem; /* Reduzindo a fonte dos itens no box */
  }
}

@media (max-width: 768px) {
  .right-box {
    width: 100%;
    padding: 20px; /* Mais ajuste no padding em telas menores */
  }

  .icon {
    width: 25px;
    height: 25px;
  }

  .item-text {
    font-size: 1rem;
  }
}
</style>
