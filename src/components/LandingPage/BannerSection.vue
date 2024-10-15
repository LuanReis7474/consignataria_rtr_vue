<template>  
  <div class="banner-initial" id="section-1">
    <div class="text-banner">
      <h2><b v-html="$t('banner.title')"></b></h2>
      <p v-html="$t('banner.description')"></p>

      <div class="button-contact">
        <router-link to="/contato">
          <button>{{ $t('banner.button') }}</button>
        </router-link>
      </div>
    </div>

    <img src="../../assets/banner.png" alt="Banner">
  </div>
</template>

<script>
export default {
  name: 'BannerSection',
}
</script>

<style scoped>
.button-contact {
  display: flex;
  justify-content: center;
  margin-top: 55px;
}

.button-contact button {
  cursor: pointer;
  width: max-content;
  height: 48px;
  background-color: #204E51;
  font-size: 1rem;
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
}

.banner-initial {
  position: relative;
  width: 100%;
  overflow: hidden;
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

h2 {
  text-align: center;
  font-size: 5rem;
  color: white;
}

p {
  text-align: center;
  font-size: 1rem;
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
  opacity: 0.6;
  z-index: 1;
}

@media (max-width: 1200px) {
  h2 {
    font-size: 3rem;
  }
}
/* Media queries para responsividade abaixo de 1024px */
@media (max-width: 1024px) {
  .banner-initial {
    height: 400px;
  }

  .banner-initial img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 0.875rem;
  }

  .banner-initial .text-banner {
    top: 30px;
  }

  .button-contact {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .banner-initial {
    height: 350px;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.75rem;
  }

  .button-contact button {
    font-size: 0.875rem;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .banner-initial {
    height: 300px;
  }

  h2 {
    font-size: 1rem;
    /* Texto principal menor no mobile */
  }

  p {
    font-size: 0.5rem;
  }

  .button-contact button {
    font-size: 0.75rem;
    height: 36px;
  }
}
</style>
