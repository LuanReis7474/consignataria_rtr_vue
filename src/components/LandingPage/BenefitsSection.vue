<template>  
  <div class="container" id="section-5">
    <div class="left-block">
      <h1 class="title">{{ $t('benefitsSection.leftBlock.title') }}</h1>
      <p class="description">{{ $t('benefitsSection.leftBlock.description') }}</p>
      <router-link to="/contato">
        <button class="action-button">{{ $t('benefitsSection.leftBlock.actionButton') }}</button>
      </router-link>
    </div>

    <div class="right-block">
      <div class="info-box">
        <div class="icon-section">
          <div class="icon-container">
            <img :src="require('@/assets/star.png')" :alt="$t('benefitsSection.rightBlock.experience.iconAlt')" />
          </div>
          <div class="text-section">
            <h2 class="right-title">{{ $t('benefitsSection.rightBlock.experience.title') }}</h2>
            <p class="right-description">{{ $t('benefitsSection.rightBlock.experience.description') }}</p>
          </div>
        </div>
        <div class="icon-section">
          <div class="icon-container">
            <img :src="require('@/assets/cubo.png')" :alt="$t('benefitsSection.rightBlock.services.iconAlt')" />
          </div>
          <div class="text-section">
            <h2 class="right-title">{{ $t('benefitsSection.rightBlock.services.title') }}</h2>
            <p class="right-description">{{ $t('benefitsSection.rightBlock.services.description') }}</p>
          </div>
        </div>
        <div class="icon-section">
          <div class="icon-container">
            <img :src="require('@/assets/check.png')" :alt="$t('benefitsSection.rightBlock.clients.iconAlt')" />
          </div>
          <div class="text-section">
            <h2 class="right-title">{{ $t('benefitsSection.rightBlock.clients.title') }}</h2>
            <p class="right-description">{{ $t('benefitsSection.rightBlock.clients.description') }}</p>
          </div>
        </div>
        <div class="icon-section">
          <div class="icon-container">
            <img :src="require('@/assets/equipe.png')" :alt="$t('benefitsSection.rightBlock.team.iconAlt')" />
          </div>
          <div class="text-section">
            <h2 class="right-title">{{ $t('benefitsSection.rightBlock.team.title') }}</h2>
            <p class="right-description">{{ $t('benefitsSection.rightBlock.team.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitsSection",
};
</script>

<style scoped>
.container {
  background-color: #F0F0F0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 100px;
  padding-left: 5.5vw;
  padding-right: 5.5vw;
  padding-bottom: 59px;
}

.left-block {
  flex: 1;
  margin-right: 0rem;
}

.title {
  font-size: 3.8rem;
  color: #204e51;
}

.description {
  margin-top: 1.8rem;
  font-size: 2rem;
  color: #1e1e1e;
}

.action-button {
  margin-top: 2.625rem;
  padding: 0.8rem 2rem;
  background-color: #204e51;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.right-block {
  flex: 1;
  background-color: #2a5d60;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 10px;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease; /* Suaviza a redução */
}

.info-box {
  display: flex;
  justify-content: space-between;
  padding-left: 18%;
  flex-direction: column;
  width: 100%;
}

.icon-section {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.icon-container {
  width: 125px;
  height: 125px;
  background-color: #1c4547;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container img {
  width: 60px;
  height: auto;
}

.text-section {
  margin-left: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-top: -4px;
  margin-bottom: 0rem;
}

.right-description {
  font-size: 1rem;
  color: white;
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    flex-direction: column;
    align-items: stretch;
  }

  .left-block, .right-block {
    width: 100%;
    margin: 0;
    padding: 2rem;
  }

  .right-block {
    margin-left: 5.5vw;
    width:70% !important; 
    margin-top: 2rem;
  }
}

@media (max-width: 992px) {
  .right-block {
    padding: 2rem;
  }

  .left-block{
    width: fit-content;
  }

  .icon-container {
    width: 100px;
    height: 100px;
  }

  .icon-container img {
    width: 50px;
  }

  .text-section {
    margin-left: 30px;
  }

  .right-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.6rem;
  }

  .left-block{
    width: fit-content;
  }

  .right-block {
    width:70%;
    padding: 2rem;
  }

  .right-title {
    font-size: 2rem;
  }

  .icon-container {
    width: 80px;
    height: 80px;
  }

  .text-section {
    margin-left: 20px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1.4rem;
  }

  .left-block{
    width: fit-content;
  }
  
  .right-block {
    width:90%;
  }

  .right-title {
    margin-top:6px;
    font-size: 1.2rem;
  }

  .right-description {
    font-size: 0.8rem;
  }

  .icon-container {
    width: 60px;
    height: 60px;
  }

  .text-section {
    margin-left: 15px;
  }
}
</style>
