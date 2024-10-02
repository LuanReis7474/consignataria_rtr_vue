<template>
  <div class="about">
    <div class="colunas-container">
      <div class="coluna">
        <h2>Sobre Nós</h2>
        <p>A Consignataria RTR é uma empresa consolidada no mercado de compra e venda de gado. 
          Com uma sólida experiência no setor, nossa missão é oferecer soluções completas para nossos
           clientes, desde a aquisição e transporte até o acompanhamento do abate. Estamos localizados 
           em Puente Kyjha e atendemos todo o território nacional, com um compromisso inabalável com
            a qualidade e a segurança.
        </p>
      </div>
      <div class="coluna">
        <h2>Nossa Missão</h2>
        <p>Proporcionar serviços de compra e venda de gado com excelência e segurança.</p>
      </div>
      <div class="coluna">
        <h2>Nossa Visão</h2>
        <p>Ser a principal referência em intermediação e transporte de gado no país,
           reconhecida pela integridade e inovação.</p>
      </div>
    </div>
    <div class="our-values">
      <h2>Nossos valores</h2>

      <div>
        <ul>
          <li>Integridade</li>
          <li>Excelência no Atendimento</li>
          <li>Transparência</li>
        </ul>
      </div>
    </div>
    <div class="our-team">
      <h2>Nosso Time</h2>

      <div class="images-team">
        <div class="collaborator">
          <img src="../assets/user.jpg" alt="USER">
          <div class="description">
            <p><b>Rodrigo Rivas</b> - Fundador</p>
            <p>Com vasta experiência no setor de pecuária, Rodrigo lidera a empresa com compromisso
              e visão estratégica.</p>
          </div>
        </div>
        <div class="collaborator">
          <img src="../assets/user.jpg" alt="USER">
          <div class="description">
            <p><b>Marcos</b> - Gerente de Operações</p>
            <p>Responsável pela coordenação das operações de transporte e logística,
             garantindo a eficiência e segurança dos nossos serviços.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.colunas-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.coluna {
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color:#e5e5e5;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.coluna h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.5em;
}

.coluna p {
  margin: 0;
}

.our-values{
  text-align: center;
  margin-top: 70px;
}

.our-team{
  text-align: center;
  margin-top: 150px;
}

.our-values h2{
  text-align: center;
}

.our-values ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex; 
  justify-content: center;
}

.our-values ul li {
  background-color: #ccc; 
  padding: 10px 20px; 
  margin-right: 10px; 
  border-radius: 10px; 
}

.images-team{
  display: flex;
  justify-content: center;
}

.collaborator img{
  height: 280px;
  width:270px;
}

.collaborator{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description{
  text-align: center;
}
</style>
