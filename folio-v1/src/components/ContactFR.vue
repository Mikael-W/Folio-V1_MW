<template>
  <div id="contact-page">
      <div class="contact-title">
          <div class="contact-page_text">CONTACT</div>
      </div>
      <div class="meeting-purpose">
          <p>Vous avez un projet et recherchez un prestataire ? Je serais ravis de vous accompagner.</p>
          <p>Ce serait un véritable plaisir de pouvoir échanger et vous apporter mes meilleures solutions et outils pour vos projets.</p>
          <p>Travaillant en toute transparence, vous pourrez suivre l'avancé de vos projets en temps réel. Cette collaboration dynamique nous permettra de modifier ou faire évoluer votre projet  
              selon vos besoins dans les meilleurs délais.
          </p>
      </div>
      <div class="contact-action">
          <div class="mail-box">
          <a class="links" href="mailto:someone@yoursite.com">
              <img class="mail-box_logo" src="../assets/img/email-logoW.png" alt="">
          </a>
          <a class="links" href="mailto:someone@yoursite.com">hello@mikaelw.com</a>
          </div>
          <div class="socials-links">
              <img class="contact-logo" src="../assets/img/instalogo.png" alt="">
              <img class="contact-logo" src="../assets/img/linkedin-logo.png" alt="">
              <img class="contact-logo" src="../assets/img/twitlogo.png" alt="">
          </div>
      </div>
      <div class="copyright"> © MW 2021. tous droits réservés.</div>

  </div>
</template>

<script>
export default {
    name:"contact"
}
</script>

<style scoped>
#contact-page{
    width: 100vw;
    height:100vh;
    position: relative;
    background: #106DB0;
}
.contact-title{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width:4vw;
  height: 100vh;
  background: white;
  border-left: 3px solid #106db0;
  font-family: INKFERNO,sans-serif;
}
.contact-page_text{
    display: flex;
    transform: rotate(-90deg);
    font-size: 3vw;
    color: #106DB0; 
    margin-left:0.5vw;
}
.meeting-purpose{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85vw;
    height: 50vh;
    margin-left: 4vw;
    padding: 5vw;
    font-family: 'Podkova', serif;
    text-align: center;
    color: white;
}
p{
    padding: 1rem;
    font-size: 2.5vw;;
}
.contact-action{
    width: 96vw;
    margin-left: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.links{
    font-family: 'Podkova', serif;
    font-size: 2.5rem;
    color:white;
    text-decoration: none;
    cursor: pointer;
}
.mail-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.mail-box_logo{
    width: 5vw;
    margin-bottom: 1rem;
}
.contact-logo{
    width: 2vw;;
    margin: 1rem 2rem;
}
.copyright{
    position:absolute;
    bottom: 9rem;
    right:-6rem;
    font-size: 1.2rem;
    transform: rotate(-90deg);
    font-family: INKFERNO,sans-serif;
    color:white;
}
@media screen and (max-width:1024px) {
    .contact-title{
        top:0;
        bottom: 95vh;
        width: 100vw;
        height: 5vh;
        border: none;
    }
    .contact-page_text{
        transform: none;
        font-size: 3vh;
    }
    .meeting-purpose{
        width: 100vw;
        height: 65vh;
        margin-left:0;
        padding: 0;
    }
    p{
        font-size: 3vw;
    }
    .contact-action{
        width: 100vw;
        margin-left: 0;
    }
    .mail-box_logo{
        width: 10vw;
    }
    .copyright{
        position:static;
        transform: none;
        display: flex;
        justify-content: center;
        margin-top: 3vh;
    }
     .socials-links{
        display: none;
    }
    @media screen and (max-width:425px) {
         p{
        font-size: 4.5vw;
    }
    .links{
        font-size: 1rem;
    }
    .socials-links{
        display: none;
    }
    .copyright{
        margin-top: 6vh;
        font-size: 0.6rem;
    }
    }
}

</style>