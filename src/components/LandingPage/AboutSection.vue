<template>
  <div class="content-section" id="section-2">
    <!-- Seção à esquerda -->
    <div class="text-section">
      <h1><b>{{ $t('aboutSection.title') }}</b></h1>
      <p>{{ $t('aboutSection.text') }}</p>
      <div class="button-contact">
        <router-link to="/contato">
          <button>
            {{ $t('aboutSection.contact') }}
          </button>
        </router-link>
      </div>
    </div>

    <!-- Seção à direita -->
    <div class="image-section">
      <img src="../../assets/gado-andando.png" alt="Imagem Descrição" />
      <div class="description-image">
        <p><b>{{ $t('aboutSection.since') }}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.content-section {
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 138px;
  padding-left: 5.5vw;
  padding-right: 5.5vw;
  padding-bottom: 150px;
  box-sizing: border-box;
}

.text-section {
  width: 52%;
}

.text-section h1 {
  color: #204E51;
  font-size: 3.8rem;
  margin-bottom: 10px;
  font-family: 'Raleway';
  font-weight: 700;
}

.text-section p {
  line-height: 30px;
  font-size: 1rem;
  margin-bottom: 20px;
}

.button-contact {
  margin-top: 37px;
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

.description-image {
  width: 346px;
  height: 107px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: -50px;
}

.description-image p {
  color: #204E51;
  font-size: 36px;
  font-family: 'Raleway';
  font-weight: 700;
}

.button-contact button:hover {
  background-color: #176c6e;
}

.image-section {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-section img {
  width: 100%;
  height: 544px;
  max-width: 550px;
  object-fit: cover;
  border-radius: 25px;
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

@media (max-width: 1200px) {
  .content-section {
    flex-direction: column;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .text-section {
    width: 100%;
    margin-bottom: 50px;
  }

  .image-section {
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }

  .button-contact {
    justify-content: center;
  }

  .button-contact button {
    font-size: 1.1rem;
    height: 44px;
  }

  .image-section img {
    height: auto;
    max-width: 80%;
  }

  .description-image {
    margin-top: -20px;
    width: 80%;
    height: auto;
  }

  .description-image p {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .content-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  h1 b{
    font-size: 1.7rem;
  }

  .description-image {
    margin-top: -20px;
  }

  .description-image p {
    font-size: 1.2rem;
  }

  .button-contact button {
    font-size: 1rem;
    height: 40px;
  }

  .image-section img {
    max-width: 100%;
  }
}
</style>
