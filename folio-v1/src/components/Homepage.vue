<template>
  <div class="folio-home">
    <h1 id="firstname">
    <span class="firstname-letters">M</span>
    <span class="firstname-letters">I</span>
    <span class="firstname-letters">K</span>
    <span class="firstname-letters">A</span>
    <span class="firstname-letters">E</span>
    <span class="firstname-letters">L</span>
    </h1>
    <h1 id="lastname">
      <span class="lasttname-letters">W</span>
      <span class="lasttname-letters">A</span>
      <span class="lasttname-letters">W</span>
      <span class="lasttname-letters">R</span>
      <span class="lasttname-letters">Z</span>
      <span class="lasttname-letters">I</span>
      <span class="lasttname-letters">C</span>
      <span class="lasttname-letters">Z</span>
      <span class="lasttname-letters">N</span>
      <span class="lasttname-letters">Y</span>
    </h1>
    <div class="home-title">Freelance web developer</div>
    
  </div>
  <div class="social-footer">
  <div class="socials">
    <img src="../assets/img/instalogo.png" class="insta">
    <img src="../assets/img/twitlogo.png" class="twitter">
    <img src="../assets/img/linkedin-logo.png" class="linkedin">
    <img src="../assets/img/email.png" class="contact">
   </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  mounted: function(){
    this.AnimationPage();

  },
  methods:{
    AnimationPage(){
    let tl = gsap.timeline();
           tl.from(".firstname-letters", { duration: 0.8, opacity: 0, x: 200, stagger: 0.25 });
           tl.from(".lasttname-letters", { duration: 0.8, opacity: 0, x: 200, stagger: 0.25 });
           tl.from(".home-title", { duration: 1, opacity: 0, y: 50 });
    }
  
  }
}
</script>

<style scoped>
.folio-home{
  position:relative;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/bgFolio.jpg);
  background-position: center;
  background-repeat: no-repeat;
}
#firstname{
  display:flex;
  flex-direction: row;
  width: 50vw;
  height: 15vh;
  font-size: 15vw;
  font-weight: bold;
  margin: 12vh 0 0 5vw;
  color:#106DB0;
  font-family: INKFERNO,sans-serif;
}
#lastname{
  display:flex;
  flex-direction: row;
  width: 50vw;
  height: 10vh;
  font-size: 15vw;
  font-weight: bold;
  margin: 24vh 0 0 5vw;
  color:#106DB0;
  font-family: INKFERNO,sans-serif;
}
.home-title{
  position: absolute;
  bottom:3vh;
  right: 5vw;
  font-size: 3rem;
  color: #106DB0;
  font-family: INKFERNO,sans-serif;
}

.social-footer{
  position: absolute;
  left: 0;
  width:3vw;
  height: 100vh;
  background: #106DB0;
}

.socials{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.insta, .twitter, .contact, .linkedin{
  width:2rem;
  height:2rem;
}
@media screen and (max-width: 768px) {
  #firstname{
    height:0;
    margin: 35vh 0 0 5vw;
  }
  #lastname{
    margin: 15vh 0 0 5vw;
  }
  .home-title{
    position: absolute;
    top:0;
    right:0;
    bottom:95vh;
    width: 100%;
    background: #106DB0;
    color:whitesmoke;
    text-align: center;
  }
  .social-footer{
    position: fixed;
    bottom: 0;
    width:100%;
    height:5vh;
  }
  .socials{
    flex-direction: row;
  }
  
}
</style>