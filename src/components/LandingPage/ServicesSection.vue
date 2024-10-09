<template>
  <div class="services-section">
    <!-- Título e descrição -->
    <div class="header">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>

    <!-- Boxes com ícones e descrições, todos na mesma linha -->
    <div class="boxes-container">
      <div class="service-box" v-for="(service, index) in services" :key="index">
        <img :src="service.icon" alt="Service Icon" class="service-icon" />
        <p class="service-description">{{ service.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      title: "Nossos Serviços",
      description: "Oferecemos uma ampla gama de serviços que atendem às suas necessidades.",
      services: [
        { icon: require('@/assets/logo.png'), text: "Serviço 1" },
        { icon: require('@/assets/logo.png'), text: "Serviço 2" },
        { icon: require('@/assets/logo.png'), text: "Serviço 3" },
        { icon: require('@/assets/logo.png'), text: "Serviço 4" }
      ]
    };
  }
};
</script>

<style scoped>
/* Estilos gerais */
.services-section {
  background-color: #F0F0F0;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

/* Estilo do cabeçalho */
.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.25rem;
  margin-bottom: 30px;
}

/* Container dos boxes */
.boxes-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Espaçamento entre os boxes */
  flex-wrap: nowrap; /* Impede que os boxes quebrem linha até 1024px */
}

@media (max-width: 1024px) {
  .boxes-container {
    flex-wrap: wrap; /* Permite quebra de linha em telas menores que 1024px */
  }
}

/* Estilo de cada box */
.service-box {
  width: 281px;
  height: 281px;
  background-color: #FFFFFF; /* Cor branca para as boxes */
  border-radius: 10px;
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

/* Estilo do ícone no topo */
.service-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

/* Estilo da descrição abaixo do ícone */
.service-description {
  font-size: 1.125rem;
  color: #333;
}

/* Responsividade */
@media (max-width: 1440px) {
  .service-box {
    width: 250px;
    height: 250px;
  }

  .service-icon {
    width: 70px;
    height: 70px;
  }

  .service-description {
    font-size: 1rem;
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

/* Para telas menores, alinhar os boxes verticalmente */
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
