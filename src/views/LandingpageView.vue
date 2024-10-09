<template>
 <div class="landing-page">
    <BannerSection></BannerSection>
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    <ValuesSection></ValuesSection>
    <SecondBannerSection></SecondBannerSection>
    <BenefitsSection></BenefitsSection>
 </div>
</template>

<script>
import BannerSection from '../components/LandingPage/BannerSection.vue';
import AboutSection from '../components/LandingPage/AboutSection.vue';
import ServicesSection from '../components/LandingPage/ServicesSection.vue';
import ValuesSection from '@/components/LandingPage/ValuesSection.vue';
import SecondBannerSection from '@/components/LandingPage/SecondBannerSection.vue';
import BenefitsSection from '@/components/LandingPage/BenefitsSection.vue'


export default {
  name: 'LandingpageView',
  components: {
    BannerSection,
    AboutSection,
    ServicesSection,
    ValuesSection,
    SecondBannerSection,
    BenefitsSection
  }
};
</script>

<style scoped>
</style>
