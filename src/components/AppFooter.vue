<template>
  <footer class="footer">
    <div class="end-logo">
      <img src="../assets/logo-final.png" alt="Logo Final">
    </div>
    <nav>
      <h2><b>{{ $t('footer.sectionsTitle') }}</b></h2>
      <div class="sections">
        <ul class="first-column">
          <li>
            <router-link :to="{ path: '/landing-page', hash: '#section-1' }">
            {{ $t('footer.home') }} 
            </router-link>
          </li>
          <li > 
            <router-link :to="{ path: '/landing-page', hash: '#section-2' }">
              {{ $t('footer.about') }} 
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/landing-page', hash: '#section-3' }">
              {{ $t('footer.services') }} 
            </router-link>
          </li>
          <li>
            <router-link to="/contato">{{ $t('footer.contact') }}</router-link>
          </li>
        </ul>
        <ul class="second-column">
          <li >
             <router-link to="/politica-privacidade">{{ $t('footer.privacy') }}</router-link>
          </li>
          <li > 
            <router-link :to="{ path: '/landing-page', hash: '#section-4' }">
              {{ $t('footer.values') }} 
            </router-link>
          </li>
          <li> 
            <router-link :to="{ path: '/landing-page', hash: '#section-5' }">
              {{ $t('footer.benefits') }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    changePage(rota) {
      this.$router.push(`/${rota}`);
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none; 
  color: inherit;       
}

.footer {
  height: auto; 
  background-color: #204E51;
  color: white;
  padding-left: 11vw;
  padding-right: 11vw;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 
  padding-top: 20px;
  padding-bottom: 20px;
}

.end-logo img {
  max-width: 300px; 
  height: auto;
}

.sections {
  display: flex;
  flex-wrap: wrap; 
  text-align: start;
}

.second-column {
  margin-left: 23px;
}

nav {
  text-align: left;
}

nav ul {
  padding-left: 0;
}

nav ul li {
  cursor: pointer;
  list-style: none;
  margin-bottom: 24px;
  font-family: 'Raleway';
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
}

nav h2 {
  font-size: 28px;
}

@media (max-width: 1200px) {
  .footer {
    flex-direction: column; 
    text-align: center; 
    padding-left: 5vw;
    padding-right: 5vw;
  }

  .end-logo {
    margin-bottom: 20px; 
  }

  .sections {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  nav ul li {
    font-size: 18px; 
    margin-bottom: 20px;
  }

  nav h2 {
    font-size: 24px;
  }
}

@media (max-width: 576px) {
  .footer {
    padding-left: 3vw;
    padding-right: 3vw;
  }

  .sections {
    flex-direction: column; 
  }

  .second-column {
    margin-left: 0;
    margin-top: 20px; 
  }

  nav ul li {
    font-size: 16px;
    margin-bottom: 16px;
  }

  nav h2 {
    font-size: 22px;
  }
}
</style>
