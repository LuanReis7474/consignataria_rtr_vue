<template>
 <div class="our-services">
    <h2>Nossos serviços</h2>

    <section class="service-info">
      <div class="service-content">
        <img class="img-service" src="../assets/fotoGado.jpg" alt="gado">
      
        <div class="service-description-right">
          <h3>Compra e Venda de Gado</h3>
          <p>Oferecemos serviços de compra e venda de gado com total transparência e 
          profissionalismo. Conectamos produtores e compradores, assegurando que todos os
          processos sejam realizados com a máxima eficiência.</p>
        </div>
       </div>
    </section>

    <section class="service-info">
      <div class="service-content">
        <img class="img-service" src="../assets/fotoBoi.jpg" alt="gado">
      
        <div class="service-description-left">
          <h3>Intermediação na Venda de Gado para Frigoríficos</h3>
          <p>Atuamos como intermediários na venda de gado para frigoríficos, garantindo 
          que todas as etapas da negociação sejam conduzidas de forma transparente e benéfica
           para todas as partes envolvidas.</p>
        </div>
       </div>
    </section>

    <section class="service-info" style="margin-top:-50px">
      <div class="service-content">
        <img class="img-gado" src="../assets/rastreamento.png" alt="gado">
      
        <div class="service-description-right" id="tracking-info">
          <h3>Serviço de Transporte de Gado com Rastreamento por Satélite</h3>
          <p>Nosso serviço de transporte de gado é realizado com rastreamento por satélite,
           proporcionando segurança e monitoramento em tempo real. Todos os transportes são
            cobertos por seguro de carga para garantir a proteção total do seu gado.</p>
        </div>
       </div>
    </section>

    <section class="service-info">
      <div class="service-content">
        <img class="img-gado" src="../assets/boi-abate.jpg" alt="gado">
      
        <div class="service-description-left" >
          <h3>Acompanhamento do Abate no Frigorífico</h3>
          <p>Acompanhamos o abate do gado no frigorífico para assegurar que todas as normas
           e regulamentos sejam cumpridos, garantindo a qualidade e segurança do processo.</p>
        </div>
       </div>
    </section>

    <section class="service-info">
      <div class="service-content">
        <img class="img-gado" src="../assets/transporte-gado.png" alt="gado">
      
        <div class="service-description-right" >
          <h3>Transporte Terrestre em Todo o Território Nacional</h3>
          <p>Oferecemos transporte terrestre para todo o território nacional, 
          com a garantia de que seu gado será transportado com segurança e eficiência.</p>
        </div>
       </div>
    </section>

    
 </div>
</template>

<style scoped>
.our-services{
    text-align:center;
}

.service-info {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh;
  margin-bottom: 80px;
}

.img-service {
  border-radius: 20px;
  width: 724px;
  height: 543px;
 }

 .img-gado{
    border-radius: 20px;
 }

.service-content {
  position: relative; 
}

.service-description-right {
  position: absolute;
  bottom: -10px; 
  right: -10px; 
  background-color: #e5e5e5;
  padding: 10px;
  border-radius: 5px;
  margin-left: 300px;
}

.service-description-left {
  position: absolute;
  bottom: -10px; 
  left: -10px; 
  background-color: #e5e5e5;
  padding: 10px;
  border-radius: 5px;
  margin-right: 300px;
}

#tracking-info{
    top: 340px;
    bottom: -120px;
}
</style>
