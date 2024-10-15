<template> 
  <div class="values-section" id="section-4">
    <div class="header">
      <h2>{{ $t('valuesSection.title') }}</h2>
      <p>{{ $t('valuesSection.subtitle') }}</p>
    </div>

    <div class="boxes-container">
      <div class="value-box">
        <div class="box-image">
          <img src="@/assets/integridade.png" alt="Integridade Icon" class="value-icon" />
        </div>
        <p class="value-title">{{ $t('valuesSection.integrity.title') }}</p>
        <p class="value-description">{{ $t('valuesSection.integrity.description') }}</p>
      </div>

      <div class="value-box">
        <div class="box-image">
          <img src="@/assets/transparencia.png" alt="Transparência Icon" class="value-icon" />
        </div>
        <p class="value-title">{{ $t('valuesSection.transparency.title') }}</p>
        <p class="value-description">{{ $t('valuesSection.transparency.description') }}</p>
      </div>

      <div class="value-box">
        <div class="box-image">
          <img src="@/assets/excelencia.png" alt="Excelência Icon" class="value-icon" />
        </div>
        <p class="value-title">{{ $t('valuesSection.excellence.title') }}</p>
        <p class="value-description">{{ $t('valuesSection.excellence.description') }}</p>
      </div>

      <div class="value-box">
        <div class="box-image">
          <img src="@/assets/responsabilidade.png" alt="Responsabilidade Icon" class="value-icon" />
        </div>
        <p class="value-title">{{ $t('valuesSection.responsibility.title') }}</p>
        <p class="value-description">{{ $t('valuesSection.responsibility.description') }}</p>
      </div>
    </div>

    <div class="button-contact">
       <router-link to="/contato">
          <button>
            {{ $t('valuesSection.contactButton') }}
          </button>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValuesSection'
};
</script>

<style scoped>
.button-contact {
  display: flex;
  justify-content: center;
  margin-top: 55px;
}

.values-section {
  background-color: #F0F0F0;
  text-align: center;
  padding-top: 90px;
  padding-bottom: 90px;
  padding-left: 5.5vw;
  padding-right: 5.5vw;
  box-sizing: border-box;
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

.header h2 {
  color: #204E51;
  font-size: 3.5rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.30rem;
  margin-bottom: 30px;
}

.box-image {
  margin-top: 17px;
  width: 189px;
  height: 189px;
  background-color: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}

.box-image img {
  width: 138px;
  height: 138px;
}

.value-description {
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  font-weight: 400;
}

.boxes-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;
  margin-top: 62px;
}

@media (max-width: 1024px) {
  .boxes-container {
    flex-wrap: wrap;
  }
}

.value-box {
  width: 300px;
  height: 430px;
  background-color: #FFFFFF;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.value-box:hover {
  transform: translateY(-10px);
}

.value-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.value-title {
  font-size: 1.5rem;
  color: #204E51;
  font-weight: 600;
  margin-top: 37px;
}

@media (max-width: 1440px) {
  .value-box {
    width: 250px;
    height: 430px;
  }

  .value-icon {
    width: 70px;
    height: 70px;
  }


}

@media (max-width: 1024px) {
  .boxes-container {
    flex-wrap: wrap;
  }

  .value-box {
    width: 220px;
    height: 350px;
  }

  .box-image {
    width: 150px;
    height: 150px;
  }

  .box-image img {
    width: 110px;
    height: 110px;
  }

  .value-title {
    font-size: 1.25rem;
  }

  .value-description {
    font-size: 14px;
  }

  .header h2 {
    font-size: 2.5rem;
  }

  .header p {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .value-box {
    width: 180px;
    height: 320px;
  }

  .box-image {
    width: 120px;
    height: 120px;
  }

  .box-image img {
    width: 90px;
    height: 90px;
  }

  .value-title {
    font-size: 1rem;
  }

  .value-description {
    font-size: 13px;
  }

  .header h2 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .value-box {
    width: 150px;
    height: 280px;
  }

  .box-image {
    width: 100px;
    height: 100px;
  }

  .box-image img {
    width: 80px;
    height: 80px;
  }

  .value-title {
    font-size: 0.875rem;
  }

  .value-description {
    font-size: 12px;
  }

  .header h2 {
    font-size: 1.75rem;
  }

  .header p {
    font-size: 0.875rem;
  }
}
</style>
