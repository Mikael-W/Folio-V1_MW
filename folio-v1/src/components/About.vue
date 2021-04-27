<template>
  <div id="about-page">
    <div class="about-title">
      <div class="about-title_text">ABOUT</div>
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
        <p class="story">Hello,</p>
        <p class="story">
          I'm Mikaël, freelance web developper passionate about the web, I put my
          expertise and my skills to my customers, accompanying them in all
          their web projects. Present in the digital world for almost 10 years
          in various sectors, I decided to devote myself entirely to my passion
          for the web and programming.
        </p>
        <p class="story">
          Working remotely all over the world, I'm open to all types of missions
          and contracts. Whether you are a independant, agency, startup or
          company, feel free to contact me.
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

<style>
#about-page {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}
.about-title{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width:4vw;
  height: 100vh;
  background: #106DB0;
}
.about-title_text{
    display: flex;
    transform: rotate(-90deg);
    font-size: 5rem;
    font-family: INKFERNO,sans-serif;
    color: whitesmoke; 
    margin-left: 1rem;
}
.about-page_story {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
}

.about-page_picture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  background: #106db0;
}
.picture-part_image {
  width: 50%;
}
.story-texte {
  width: 75%;
}
.story {
  font-family: 'Podkova', serif;
  color: #106db0;
  font-size: 2.2rem;
  padding: 1rem 0;
  line-height: 2.5rem;
}
</style>
