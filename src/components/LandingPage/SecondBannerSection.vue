<template>
  <div class="banner">
    <img src="@/assets/fotoGado.jpg" alt="Banner" class="banner-image" />
    <div class="overlay"></div>
    <div class="content">
      <h2 class="banner-title">{{ $t('secondBanner.title') }}</h2>
      <div class="button-container">
        <div class="button-contact">
           <router-link to="/contato" >
              <button>
                {{ $t('secondBanner.learnMoreButton') }}
              </button>
          </router-link>
        </div>
        <div class="button-contact">
          <router-link to="/contato">
            <button class="second">
                {{ $t('secondBanner.contactButton') }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 629px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.content {
  position: absolute;
  top: 0;
  left: 5.5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  color: #FFFFFF;
}

.banner-title {
  width:90%;
  font-size: 72px;
  margin-bottom: 75px;
}

.button-container {
  display: flex;
  gap: 20px;
}

.button-contact button {
  cursor: pointer;
  width:181px;
  height: 48px;
  background-color: #204E51;
  font-size: 1rem;
  color: #FFFFFF;
  border-radius: 8px;
  border: none;
  padding: 0 20px;
}

.button-contact .second {
  background-color: transparent !important;
  color: white !important;
  border: solid 1px white !important;
}

@media (max-width: 1024px) {
  .banner {
    height: 450px;
  }

  .content {
    left: 50px;
  }

  .banner-title {
    font-size: 48px;
  }

  .button-contact button {
    height: 40px;
    width:fit-content;
    font-size: 0.875rem;
  }
}

@media (max-width: 768px) {
  .banner {
    height: 350px;
  }

  .content {
    left: 20px;
  }

  .banner-title {
    font-size: 36px;
  }

  .button-contact button {
    height: 36px;
    width:fit-content;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .banner {
    height: 250px;
  }

  .banner-image {
    object-position: center;
  }

  .banner-title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .button-contact button {
    height: 30px;
    width:fit-content;
    font-size: 0.75rem;
    padding: 0 10px;
  }
}
</style>
