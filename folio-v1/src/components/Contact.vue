<template>
  <div id="contact-page">
      <div class="contact-title">
          <div class="contact-page_text">CONTACT</div>
      </div>
      <div class="meeting-purpose">
          <p>Are you looking for a developer ? Feel free to contact me to talk about it.</p>
          <p>It will be a pleasure for me to exchange around it in order to bring you the best tools and solutions to complete your project.</p>
          <p>You will be able to follow my work daily which will make our collaboration dynamic and will allow us to carry out your project as soon as possible.</p>
      </div>
      <div class="contact-action">
          <div class="mail-box">
          <a class="links" href="mailto:someone@yoursite.com">
              <img class="mail-box_logo" src="../assets/img/email-logo.png" alt="">
          </a>
          <a class="links" href="mailto:someone@yoursite.com">hello@mikaelw.com</a>
          </div>
          <div class="socials-links">
              <img src="../assets/img/instalogo.png" alt="">
              <img src="../assets/img/linkedin-logo.png" alt="">
              <img src="../assets/img/twitlogo.png" alt="">
          </div>
      </div>
      <div class="copyright"> © MW 2021. All rights reserved.</div>

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
}
.contact-title{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width:4vw;
  height: 100vh;
  background: #106DB0;
  border-right: 3px solid whitesmoke;
  border-left: 3px solid whitesmoke; 
  font-family: INKFERNO,sans-serif;
}
.contact-page_text{
    display: flex;
    transform: rotate(-90deg);
    font-size: 5rem;
    color: whitesmoke; 
    margin-left: 1rem;
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
    font-size: 3rem;
    text-align: center;
    color: #106DB0;
}
p{
    padding: 1rem;
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
    color:#106DB0;
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
.copyright{
    position:absolute;
    bottom: 9rem;
    right:-6rem;
    font-size: 1.2rem;
    transform: rotate(-90deg);
    font-family: INKFERNO,sans-serif;
    color:#106DB0;
}

</style>