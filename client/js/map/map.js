import { createMap, css, getNode, getNodes } from "../../lib/index.js";

createMap({
  node: "#mapPage",
  lat: 37.561849321667445,
  lng: 126.92189238888646,
  img: "/assets/icons/bubble-box.svg",
});



const nav = getNode('nav');
const list = getNodes('nav ul li')

function onHandleActive(e) {
  let target = e.target.closest('li');
  
  if(!target || !list) return;

  target.classList.add('is-activeNav')

}
nav.addEventListener('click',onHandleActive)