<template>
  <div id="works-page">
        <div class="works-page_title">
         <div class="works-page_text">WORKS</div>
        </div>
        <div class="project-container">
            <div class="project-presentation-right">
            <div class="project-presentation_description">
                <p>Imagined and designed by myself, I thought this portfolio</p>
                <p>into an original visit presenting my skills and services. The </p>
                <p>whole thing is accompanied by animations to make the</p>
                <p>visitors' journey even more pleasant and fluid.</p>
            </div>
            <div class="project-presentation_picture">
                <img src="../assets/img/folio_MW.png" alt="">
            </div>
        </div>
        <div class="project-presentation-left">
            <div class="project-presentation_picture">
                <img src="../assets/img/groupomania.png" alt="">
            </div>
            <div class="project-presentation_description">
                <p>Full social network project inspired by facebook</p>
                <p>created from the database to the customer </p>
                <p>front experience</p>
            </div>
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
            <div class="project-presentation_picture">
                <img src="../assets/img/sopekocko.png" alt="">
            </div>
            <div class="project-presentation_description">
                <p>On the other side of the machine, creating and</p>
                <p>securing a database and server for a comparative</p>
                <p>hot sauce application </p>
            </div>
        </div>
        <div class="project-presentation-right">
            <div class="project-presentation_description">
                <p>Development of the customer experience part </p>
                <p>(front-end) of an e-commerce website with </p>
                <p> connection to the api (backend) and unit testing</p>
            </div>
            <div class="project-presentation_picture">
                <img src="../assets/img/orinoco.png" alt="">
            </div>
        </div>
        <div class="project-presentation-left">
            <div class="project-presentation_picture">
                <img src="../assets/img/lachouetteagence.png" alt="">
            </div>
            <div class="project-presentation_description">
                <p>Seo and accessibility optimisation of a website, keywords</p>
                <p>research, improvement of loading speed. Compliance and </p>
                <p>respect of wcag standards.</p>
            </div>
        </div>
        <div class="project-presentation-right">
            <div class="project-presentation_description">
                <p>Integration of a mobile application for ordering meals </p>
                <p>online with some call to action animations</p>
            </div>
            <div class="project-presentation_picture">
                <img src="../assets/img/ohmyfood.png" alt="">
            </div>
        </div>
        <div class="project-presentation-left">
            <div class="project-presentation_picture">
                <img src="../assets/img/reservia.png" alt="">
            </div>
            <div class="project-presentation_description">
                <p>Integration of an online booking site for rooms</p>
                <p>for rent  </p>
            </div>
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
    font-size: 4rem;
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
    height:75%;
    object-fit:fill;
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