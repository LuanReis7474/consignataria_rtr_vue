<template>
  <div class="contact">
    <h1>{{ $t('contact.contact') }}</h1>
    <div class="infos-contact">
      <p>{{ $t('contact.contactInfo') }}</p>
      <p><b>{{ $t('contact.phone') }}</b>: (047230464)</p>
      <p><b>{{ $t('contact.email') }}</b>: rodri_rivas85@hotmail.com</p>
      <p><b>{{ $t('contact.address') }}</b>: Rua Py03, Número 407, San José, Puente Kyjha</p>
    </div>
    
    <div class="localization">
      <p>{{ $t('contact.findUs') }}</p>
      <iframe id="map-canvas" class="map_part" width="100%"  height="450"  
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
      src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Rua 
      Py03, Número 407,San José, Puente Kyjha, Paraguai&amp;t=&amp;z=14&amp;ie=UTF8&amp;
      iwloc=B&amp;output=embed">Powered by <a href="https://embedgooglemaps.com">html 
      embed google maps</a> and <a href="https://allabeviljas.se/">smslån som beviljar alla</a>
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContactView',
};
</script>

<style scoped>
.contact{
    text-align: left;
    margin-left: 5.5vw;
    margin-right: 5.5vw;
    margin-bottom: 30px;
}

h1{
    
}

.infos-contact{
    text-align: left;
}

.localization{
    margin-top: 50px;
}
</style>
