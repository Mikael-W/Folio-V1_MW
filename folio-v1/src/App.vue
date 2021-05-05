<template>
<div id="layout-en">
	<main class="outer-wrapper">
  <router-view/>
  </main>
</div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Podkova&display=swap');
@font-face {
  font-family: 'INKFERNO';
  src: url('./assets/font/INKFERNO.otf'); 
}
#_folioMW {
  font-family: Emberly, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #106DB0;
}
.outer-wrapper{
	width: 100vh;
	height: 100vw;
	transform: rotate(-90deg) translateX(-100vh);
	transform-origin: top left;
	overflow-y:scroll;
	overflow-x: hidden;
	position:absolute;
}
@media screen and (max-width: 1024px){
	.outer-wrapper{
		transform: none;
		width: 100vw;
		height:100vh;
	}
}
</style>
