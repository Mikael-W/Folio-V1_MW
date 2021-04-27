<template>
  <div id="works-page">
        <div class="works-page_title">
         <div class="works-page_text">WORKS</div>
        </div>
        <div class="project-container">
        <div class="project-presentation-left">
            <div class="project-presentation_picture">
                <img src="" alt="">
            </div>
            <div class="project-presentation_description"></div>
        </div>
        <div class="project-presentation-right">
            <div class="project-presentation_description">
                <p>Great collaboration with new futur skincare brand</p>
                <p><a href="www.laerte-skincare.ch">LAERTE</a> make marvellous organic skincare products</p>
                <p>I worked on animations to give a smooth effect on it</p>
                <p>website coming soon ! <a href="www.laerte-skincare.ch">www.laerte-skincare.ch</a></p>
                <div class="project-pictures_utils"></div>
            </div>
            <div class="project-presentation_picture">
                <img src="../assets/img/laerte.png" alt="laerte-skincare.ch">
            </div>
        </div>
        <div class="project-presentation-left">
            <div class="project-presentation_picture"></div>
            <div class="project-presentation_description"></div>
        </div>
        <div class="project-presentation-right">
            <div class="project-presentation_description"></div>
            <div class="project-presentation_picture"></div>
        </div>
        <div class="project-presentation-left">
            <div class="project-presentation_picture"></div>
            <div class="project-presentation_description"></div>
        </div>
        <div class="project-presentation-right">
            <div class="project-presentation_description"></div>
            <div class="project-presentation_picture"></div>
        </div>
        <div class="project-presentation-left">
            <div class="project-presentation_picture"></div>
            <div class="project-presentation_description"></div>
        </div>
        <div class="project-presentation-right">
            <div class="project-presentation_description"></div>
            <div class="project-presentation_picture"></div>
        </div>
        <div class="project-presentation-left">
            <div class="project-presentation_picture"></div>
            <div class="project-presentation_description"></div>
        </div>
        <div class="project-presentation-right">
            <div class="project-presentation_description"></div>
            <div class="project-presentation_picture"></div>
        </div>
        </div>
  </div>
</template>

<script >
export default {
    name:"works"
}
</script>

<style scoped>
#works-page{
    position: relative;
    width: 100vw;
    height: 100vh;
}
.project-container{
    width:96vw;
    height: 100vh;
    overflow: scroll;
    margin-left:4vw;
}
.works-page_title{
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
.works-page_text{
    transform: rotate(-90deg);
    font-size: 5rem;
    color: whitesmoke;
    margin-left: 1rem;
}
.project-presentation-left, .project-presentation-right{
    display: flex;
    width: 100%;
    height: 50vh;
}
.project-presentation_picture{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50vh;
    background: #106DB0;
}
img{
    width: 70%;
}
.project-presentation_description{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Podkova', serif;
    font-size: 1.5rem;
    color:#106DB0 ;
    width: 50%;
    height: 50vh;
    background: whitesmoke;
}

</style>