<template>
  <div id="about-page">
    <div class="about-title">
      <div class="about-title_text">À PROPOS</div>
    </div>
    <div class="about-page_picture">
      <img
        class="picture-part_image"
        src="../assets/img/folio-portrait.jpg"
        alt="mikaël wawrziczny"
      />
    </div>
    <div class="about-page_story">
      <div class="story-texte">
        <p class="story">Bonjour,</p>
        <p class="story">
          Je suis Mikaël, développeur freelance basé en Normandie, près d'Evreux.
        </p>
        <p class="story">
          Passionné par le developpement web, je mets mon expertise et mes services
          à votre disposition pour vous accompagner dans vos projets. 
          Présent depuis près de 10 ans dans l'univers digital à différents postes,
          J'ai décidé de me consacrer pleinement au developpement et à la programmation.
        </p>
        <p class="story">
          Travaillant essentiellement à distance, je suis disponible pour tout types de missions 
          et contrats.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
#about-page {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}
.about-title {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 4vw;
  height: 100vh;
  background: white;
}
.about-title_text {
  display: flex;
  transform: rotate(-90deg);
  white-space: nowrap;
  font-family: INKFERNO, sans-serif;
  display: flex;
  transform: rotate(-90deg);
  font-size: 3vw;
  color: #106db0;  
  margin-left:0.5vw;
}
.about-page_story {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  background: #106db0;
}

.about-page_picture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  background: white;
}
.picture-part_image {
  width: 50%;
}
.story-texte {
  width: 75%;
}
.story {
  font-family: "Podkova", serif;
  color: white;
  font-size: 2vw;
  padding: 1rem 0;
}
@media screen and (max-width: 1024px) {
  .about-title{
    top:0;
    width: 100%;
    height: 5vh;
  }
  .about-title_text{
    transform: none;
    font-size: 3vh;
  }
  .about-page_picture{
    width: 100vw;
    height: 47.5vh;
    align-content: center;
  }
  .picture-part_image{
    width: 30%;
  }
  #about-page{
    flex-direction: column;
    height: auto;
  }
  .about-page_story{
    width: 100vw;
    height: 47.5vh;
  }
  .story{
    font-size: 3vw;
  }
  @media screen and (max-width: 425px){
    .story-texte {
    margin-top: 1.5rem;
  }
    .story{
    font-size: 4vw;
  }
    .picture-part_image{
    width: 50vw;
  }
  }
}
</style>
