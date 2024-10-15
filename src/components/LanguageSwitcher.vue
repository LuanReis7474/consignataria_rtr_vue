<template>
  <div class="language-switcher">
    <button @click="toggleOpen" class="toggle-button">
      🌐 
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
      isOpen: false, 
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen; 
    },
    changeLanguage(language) {
      this.$i18n.locale = language; 
      this.isOpen = false; 
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
