<template> 
  <div class="services-section" id="section-3">
    <div class="header">
      <h2><b v-html="$t('services.title')"></b></h2>
      <p v-html="$t('services.description')"></p>
    </div>

    <div class="boxes-container">
      <div class="service-box" v-for="(service, index) in services" :key="index">
        <img :src="service.icon" alt="Service Icon" class="service-icon" />
        <p class="service-description">{{ $t(service.textKey) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        { icon: require('@/assets/exportacao.png'), textKey: "services.list.intermediation" },
        { icon: require('@/assets/compra_gado.png'), textKey: "services.list.buy_sell" },
        { icon: require('@/assets/acompanhamento.png'), textKey: "services.list.transport" },
        { icon: require('@/assets/transporte.png'), textKey: "services.list.monitoring" }
      ]
    };
  }
};
</script>

<style scoped>
.services-section {
  background-color: #F0F0F0;
  text-align: center;
  padding-left:5.5vw;
  padding-right: 5.5vw;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
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
    flex-wrap: wrap; /* Permite quebra de linha em telas menores que 1024px */
  }
}

.service-box {
  width: 281px;
  height: 281px;
  background-color: #FFFFFF; /* Cor branca para as boxes */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-box:hover {
  transform: translateY(-10px);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.service-description {
  font-size: 1.5rem;
  color:#204E51;
  font-weight: 600;
}

@media (max-width: 1440px) {
  .service-box {
    width: 250px;
    height: 250px;
  }

  .service-icon {
    width: 70px;
    height: 70px;
  }


}

@media (max-width: 1024px) {
  .service-box {
    width: 220px;
    height: 220px;
  }

  .service-icon {
    width: 60px;
    height: 60px;
  }

  .service-description {
    font-size: 0.875rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .service-box {
    width: 200px;
    height: 200px;
  }

  .service-icon {
    width: 50px;
    height: 50px;
  }

  .service-description {
    font-size: 0.875rem;
  }

  .header h1 {
    font-size: 1.75rem;
  }

  .header p {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .service-box {
    width: 150px;
    height: 150px;
  }

  .service-icon {
    width: 40px;
    height: 40px;
  }

  .service-description {
    font-size: 0.75rem;
  }
}
</style>
