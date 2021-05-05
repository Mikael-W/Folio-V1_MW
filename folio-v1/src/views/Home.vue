<template>
  <div class="home-wrapper">
    <Homepage />
    <About />
    <Works />
    <Contact />
    </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Homepage, 
    About,
    Works,
    Contact
  },
}
</script>
<style>
.home-wrapper{
  display: flex;
  flex-direction: row;
  width: 400vw;
  transform: rotate(90deg) translateY(-100vh);;
  transform-origin: top left;
}
@media screen and (max-width: 1024px){
  .home-wrapper{
    display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    transform: none;
    width:100vw;
  }
}
</style>
