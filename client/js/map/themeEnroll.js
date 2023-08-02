/* global gsap */
import { getNode, getNodes,attr, clearContents, renderEmptyPage,  renderReviewPage, tiger } from "../../lib/index.js";


const nav = getNode('nav');
const list = getNodes('nav ol')

function onHandleActive(e) {
  e.preventDefault()
  let target = e.target.closest('li');
  
  if(!target || !list) return;

  target.classList.add('is-activeNav')

}
nav.addEventListener('click',onHandleActive)





const placeList = getNode('.placeList')
async function renderPlaceList() {
  try{    
      const response = await tiger.get( 'http://localhost:3000/reviewChoice');

      const reviewPageData = response.data

      reviewPageData.forEach((item)=>renderReviewPage(placeList, item))
      
    

  }
  catch(err){
    console.log(err);
    renderEmptyPage(placeList)
    // location.href = '404.html'
  }
}

function handleDelete(e){
  // e.preventDefault()
    const button = e.target.closest('button')
    const li = e.target.closest('li')
  
    if(!li || !button) return;
    const id = attr(li, 'data-index').slice(4)
    console.log(id);
  

    tiger.delete(`http://localhost:3000/reviewChoice/${id}`)
    .then(()=>{
      clearContents(placeList);
      renderPlaceList()
    })
  }

placeList.addEventListener('click', handleDelete)
renderPlaceList()
