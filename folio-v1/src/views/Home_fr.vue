<template>
  <div class="layout-fr">
    <Accueil />
    <apropos />
    <Projets />
    <ContactFR />
    </div>
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Accueil.vue'
import Apropos from '@/components/Apropos.vue'
import Projets from '@/components/Projets.vue'
import ContactFR from '@/components/ContactFR.vue'

export default {
  name: 'Home_fr',
  components: {
    Accueil, 
    Apropos,
    Projets,
    ContactFR
  },
}
</script>

<style>
.layout-fr{
  display: flex;
  flex-direction: row;
  width: 400vw;
  transform: rotate(90deg) translateY(-100vh);;
  transform-origin: top left;
}
@media screen and (max-width: 768px){
  .layout-fr{
    display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    transform: none;
    width:100vw;
  }
}
</style>