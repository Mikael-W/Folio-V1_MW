<template>
  <div class="layout-en">
    <Homepage />
    <About />
    <Works />
    <ContactEN />
    </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import ContactEN from '@/components/ContactEN.vue'

export default {
  name: 'Home_en',
  components: {
    Homepage, 
    About,
    Works,
    ContactEN
  },
}
</script>
<style>
.layout-en{
  display: flex;
  flex-direction: row;
  width: 400vw;
  transform: rotate(90deg) translateY(-100vh);;
  transform-origin: top left;
}
@media screen and (max-width: 768px){
  .layout-en{
    display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    transform: none;
    width:100vw;
  }
}
</style>
