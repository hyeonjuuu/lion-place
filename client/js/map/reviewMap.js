import { createReviewMap,getNode,getNodes } from "../../lib/index.js";

createReviewMap('#reviewMap',37.558048589925534,126.91122939941944)

const nav = getNode('nav');
const list = getNodes('nav ul li')

function onHandleActive(e) {
  let target = e.target.closest('li');
  
  if(!target || !list) return;

  target.classList.add('is-activeNav')

}
nav.addEventListener('click',onHandleActive)