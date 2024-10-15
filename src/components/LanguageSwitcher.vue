<template>
  <div class="language-switcher">
    <button @click="toggleOpen" class="toggle-button">
      🌐 <!-- Ícone de globo para representar troca de idioma -->
    </button>
    <transition name="fade">
      <div v-if="isOpen" class="dropdown-menu">
        <img
          src="../assets/brasil.png"
          alt="Português"
          @click="changeLanguage('pt')"
          class="flag"
        />
        <img
          src="../assets/espanhol.png"
          alt="Español"
          @click="changeLanguage('es')"
          class="flag"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Controla o estado do menu de idiomas (aberto/fechado)
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen; // Alterna o estado de visibilidade
    },
    changeLanguage(language) {
      this.$i18n.locale = language; // Altera o idioma no Vue I18n
      this.isOpen = false; // Fecha o menu após selecionar um idioma
    },
  },
};
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 0;
  right: 20px;
  padding: 10px;
  z-index: 1000;
}

.toggle-button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  color: #333;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  gap: 15px;
  z-index: 2000;
}

.flag {
  width: 35px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.flag:hover {
  transform: scale(1.1);
}

/* Transição suave para abrir/fechar o menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
