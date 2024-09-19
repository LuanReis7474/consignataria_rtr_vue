<template>
  <div class="about">
    <div class="colunas-container">
      <div class="coluna">
        <h2>Sobre Nós</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec odio vehicula vestibulum. Morbi
          vehicula, risus ac vestibulum venenatis, justo felis fermentum arcu, in scelerisque ligula nisl in purus.
        </p>
      </div>
      <div class="coluna">
        <h2>Nossa História</h2>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="coluna">
        <h2>Avanços</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.</p>
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
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.coluna h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.5em;
}

.coluna p {
  margin: 0;
}
</style>
