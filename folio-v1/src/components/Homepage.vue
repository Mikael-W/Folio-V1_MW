<template>
  <div class="folio-home">
    <div class="header-bar">
      <div class="logo">MW</div>
      <div class="available">AVAILABLE</div>
      <a class="language" href="www.mikaelw.fr">FR</a>
      </div>
    <div id="firstname">MIKAEL</div>
    <div id="lastname">WAWRZICZNY</div>
    <h1 class="home-title">Freelance web developer</h1>
  </div>
  <div class="social-footer">
  <div class="socials">
    <a href="https://www.instagram.com/mikaelw_dev/"><img src="../assets/img/instalogo.png" class="insta"></a>
    <a href="https://twitter.com/w3_mika"><img src="../assets/img/twitlogo.png" class="twitter"></a>
    <a href="https://www.linkedin.com/in/mikael-w/?locale=en_US"><img src="../assets/img/linkedin-logo.png" class="linkedin"></a> 
    <a href="mailto:someone@yoursite.com"><img src="../assets/img/email.png" class="contact"></a> 
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
    this.spanSplittingTitle();
    this.AnimationPage();
    

  },
  methods:{
    spanSplittingTitle(){
      let firstname = document.querySelector("#firstname");
      let lastname = document.querySelector("#lastname");

      firstname.innerHTML = "<span class='firstname-letters'>" +
      firstname.innerHTML.split("").join("</span><span class='firstname-letters'>") + "</span>";
      lastname.innerHTML = "<span class='lastname-letters'>" +
      lastname.innerHTML.split("").join("</span><span class='lastname-letters'>") + "</span>"
    },
    AnimationPage(){
    let tl = gsap.timeline();
           tl.from(".firstname-letters", { duration: 0.8, opacity: 0, x: 200, stagger: 0.25 });
           tl.from(".lastname-letters", { duration: 0.8, opacity: 0, x: 200, stagger: 0.25 });
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
.header-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  color: #106DB0;
  font-size: 1rem;
  margin-left: 3rem;
  padding:0.5rem;
}
.available{
  color: #106DB0;
  margin-right:3rem;
  font-family: INKFERNO,sans-serif;

}
.language{
  font-size: 1rem;
  padding: 0.5rem;
  color: #106DB0;
  display: block;
  text-decoration: none;
  font-family: INKFERNO,sans-serif;
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
  .header-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #106DB0;
}
  #firstname{
    height:0;
    margin: 35vh 0 0 5vw;
  }
  #lastname{
    margin: 15vh 0 0 5vw;
  }
  .home-title{
    position: absolute;
    top:75%;
    right: 11vw;
    width: 100%;
    color:#106DB0;
    text-align: center;
  }
  .available{
    font-size: 1.2rem;
    padding: 0.5rem;
    color: white;
  }
  .social-footer{
    position: fixed;
    z-index: 99999;;
    bottom: 0;
    width:100%;
    height:5vh;
  }
  .socials{
    flex-direction: row;
  }
@media screen and (max-width: 425px){
  #firstname{
    margin: 25vh 0 0 5vw;
  }
 .insta, .twitter, .contact, .linkedin{
  width:1rem;
  height:1rem;
  }
  .home-title{
    font-size: 1.5rem;
    right:5vw;
  }
  .available{
    font-size: 1rem;
    padding: 0.5rem;
  }
  @media screen and (max-width: 425px){
    .home-title{
    right:0;
  }
  }
}
}
</style>