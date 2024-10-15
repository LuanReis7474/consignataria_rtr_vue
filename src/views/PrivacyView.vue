<template>
  <div class="privacy-policy-container">
    <div class="privacy-policy-box">
      <h1>{{ $t('privacyPolicy.title') }}</h1>
      <p>{{ $t('privacyPolicy.description1') }}</p>
      <p>{{ $t('privacyPolicy.description2') }}</p>
      <p>{{ $t('privacyPolicy.description3') }}</p>
      <p>{{ $t('privacyPolicy.description4') }}</p>
      <p>{{ $t('privacyPolicy.description5') }}</p>
      <p>{{ $t('privacyPolicy.description6') }}</p>
      <p>{{ $t('privacyPolicy.description7') }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PrivacyView',
};
</script>

<style scoped>
.privacy-policy-container {
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9; 
}

.privacy-policy-box {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  width: 100%;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  margin-bottom: 15px;
}
</style>
