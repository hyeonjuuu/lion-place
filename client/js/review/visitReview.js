import { getNode as $, getNodes, insertLast } from "/lib/index.js";

const nav = $("nav");
const list = getNodes("nav ul li");

function onHandleActive(e) {
  let target = e.target.closest("li");

  if (!target || !list) return;

  target.classList.add("is-activeNav");
}
nav.addEventListener("click", onHandleActive);

const reviewArea = $(".reviewArea");
const textField = $("#reviewText");
const storeName = $("#storeName");
const visitList = $(".visitList");
const swiperSlide = $(".swiper-slide");
const hashTagBtns = getNodes(".swiper-slide > button");

//클릭한 대상을 찾기
//클릭한 대상의 data-name 값 찾기

function createReview(store, reviewDesc, hashTag) {
  let newDate = new Date();

  let year = newDate.getFullYear(); // 년도
  let month = newDate.getMonth() + 1; // 월
  let date = newDate.getDate(); // 날짜
  let day = newDate.getDay(); // 요일
  let weekArray = new Array("일", "월", "화", "수", "목", "금", "토");
  let today = `${year}.${month}.${date}.${weekArray[day]}`;

  const template = /* html */ `
  <li class="visitItem justify-center gap-1 p-1">
    <div class="text-base font-semibold leading-normal text-black">
      ${today} 방문
    </div>
    <div class="my-4 w-full max-w-[599px] rounded-md bg-white p-3">
      <div class="relative mb-1 flex h-[24px] items-center">
        <span class="storeName mr-1 font-semibold">${store}</span>
        <div class="absolute right-0 flex">
          <img src="/assets/icons/swiper/heart.svg" alt="하트 아이콘" />
          <img src="/assets/icons/swiper/more.svg" alt="더보기 아이콘" />
        </div>
      </div>
      <div class="flex gap-3">
        <div class="inline-flex flex-col items-start justify-center gap-1">
          <span class="reviewDesc text-xs font-normal leading-tight text-gray-500">
            ${reviewDesc}
          </span>
          <div class="flex flex-row gap-[2px]">
            <span class="rounded-sm bg-gray/50 px-2 text-xs text-gray/500">
              <span class="mr-1">${hashTag}</span>
            </span>
            <span class="rounded-sm bg-gray/50 px-2 text-xs text-gray/500">
              <span class="mr-1">${hashTag}</span>
            </span>
          </div>
        </div>
      </div>
      <span class="text-xs font-normal text-gray/300">
        파운드 외 2 • 12,300원
      </span>
    </div>
  </li>
  `;
  return template;
}

function endScroll(target) {
  target.srcollTop = target.scrollHeight;
  return target.scrollHeight;
}

function clearContents(target) {
  if (target.nodeName === "INPUT" || target.nodeName === "TEXTAREA") {
    target.value = "";
    return;
  }
  target.textContent = "";
}

const handleArticle = (e) => {
  let target = e.target;
  let name = target.dataset.name;

  while (!name) {
    target = target.parentNode; //parentElement도 가능
    name = target.dataset.name; //기존의 name값이 undefined가 뜰 시 while문 순환, 값을 새로 선택한 타겟의 값으로 다시 수집해서 넣어주어야함(재할당).

    if (target.nodeName === "BODY") {
      //클릭했는데 부모를 찾다가 혹시 BODY를 만나게 되면 더이상 찾지말고 반복문 종료해
      target = null; //값을 명시적으로 비워두기 위해
      return;
    }
  }
  console.log(name); //data-name이 없으면 undefined가 뜨므로 부모의 것을 가져와야함.

  if (name === "send") {
    e.preventDefault();
    let store = storeName.value; //textField에 입력한 문자값이 value에 담김.
    console.log(store);
    let reviewDesc = textField.value; //textField에 입력한 문자값이 value에 담김.
    if (reviewDesc === "") return;

    //send 버튼을 눌렀을때 ".comment_container 에 template 을 넣어주기
    insertLast(visitList, createReview(store, reviewDesc));
    //textField.value = '';//send버튼 누르면 등록되고 안에 내용이 지워지도록 하기
    //visitList.srcollTop = visitList.scrollHeight;
    endScroll(visitList);
    clearContents(textField);
  }
};

function createHashTag() {
  for (let i = 0; i < hashTagBtns.length; i++) {
    console.log(hashTagBtns[i].textContent);
  }
  return;
}

reviewArea.addEventListener("click", handleArticle);
swiperSlide.addEventListener("click", createHashTag);
//parentNode와 parentElement의 차이
//모든 노드 탐색(주석도 노드에 포함) vs 요소 노트 탐색
