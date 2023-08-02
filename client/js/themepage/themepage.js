import { getNode, getNodes } from "/lib/dom/getNode.js";

getNode;
getNodes;

function addClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}

function removeClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

const tabContainer = getNode(".container");
const tabButtons = getNodes(".tabButton");
const tabContents = getNodes(".tabContents");

tabContents[1].classList.add("hidden");

function handleTab(e) {
  const target = e.target.closest(".tabButton");

  if (!target) return;

  // target의 data-list 값을 가져옵니다.
  const targetDataList = target.getAttribute("data-list");

  // 모든 탭 내용을 숨깁니다.
  tabContents.forEach((content) => {
    addClass(content, "hidden");
  });

  // 해당하는 data-order 속성을 가진 탭 내용만 보여줍니다.
  const targetTabContent = document.querySelector(
    `[data-order="${targetDataList}"]`,
  );
  removeClass(targetTabContent, "hidden");
}

tabContainer.addEventListener("click", handleTab);

const nav = getNode("nav");
const list = getNodes("nav ul li");

function onHandleActive(e) {
  let target = e.target.closest("li");

  if (!target || !list) return;

  target.classList.add("is-activeNav");
}
nav.addEventListener("click", onHandleActive);
