// - 회원가입을 통해 사용자(user)를 생성하고 관리합니다.
//     - 랜덤 한 문자값 (10자 이상) 을 생성 후 사용자의 Unique ID 값으로 넣어주세요.
//     - 해당 유저의 Unique ID를 확인 후 로그인합니다.
//     - 응답받은 Unique ID는 `localStorage`에 저장해주세요
//     - 다음 번에 로그인 시 Unique ID가 존재한다면 루트 경로로 리디렉션 시켜주세요
//     - 어떤 경우든 Unique ID가 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리디렉션 시켜주세요
//     - 로그아웃은 클라이언트 단에서 `localStorage`에 저장된 Unique ID를 삭제하는 방식으로 구현합니다.
//     데이터 스키마
import {
  attr,
  clearContents,
  deleteStorage,
  getNode,
  getNodes,
  insertFirst,
  insertLast,
  loadStorage,
  saveStorage,
  tiger,
} from "../../lib/index.js";

const idKey = "id";
const userid = document.querySelector(".userid");
const userpw = document.querySelector(".userpw");
const loginBtn = document.querySelector(".loginBtn");

let useridPass = false;

// 아이디 정규식
function useridReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{3,16}$/;

  return re.test(String(text).toLowerCase());
}
// 비밀번호 정규식
function userpwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

userid.addEventListener("input", function () {
  if (useridReg(this.value)) {
    this.classList.remove("is-active");

    useridPass = true;
  } else {
    this.classList.add("is-active");
    useridPass = false;
  }
});
// 로그인 버튼 되는지 확인
loginBtn.addEventListener("click", () => {
  // if (useridPass) {
  console.log("로그인");
  // }
});

// 유니크 아이디 랜덤 생성기
function uniqueID() {
  const alphabet = "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYX";
  let arr = [];

  for (let i = 0; i < 10; i++) {
    const n = Math.floor(Math.random() * alphabet.length);
    arr.push(alphabet[n]);
  }
  return arr.join("");
}
const id = uniqueID();

console.log(id);

// -------------------------------------------------------------------------------------------
// Post 통신
// 통신 방법
// let url = "http://localhost:3000/reviewChoice";

// fetch(url)
//   .then((res) => data.json()) // 응답 결과를 json 형태로 파싱
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
// async function renderUserList() {
//   try {
//     await delayP();

//     const response = await tiger.get("http://localhost:3000/reviewChoice");
//     const userData = response.data;
//     console.log(userData);

//     userData.forEach((item) => renderUserCard(reviewList, item));
//   } catch (err) {
//     console.log(err);
//     renderEmptyCard(reviewList);
//     // location.href = '404.html'
//   }
// }
// renderUserList();

// async function fetching() {
//   const user = await.tiger.get("http://localhost:3000/reviewChoice");
//   const res = await user;
//   const authUser = res.data.filter((e) => e.userId === "userid")[0];

//   return authUser;
// }
// const authUser = await fetching();

// -------------------------------------------------------------------------------------------
function login() {
  //입력값 여부 확인.
  if (checkNullInput(userid) && checkNullInput(userpw)) {
    //값이 모두 입력된 경우

    //1.1 아이디 유효성 검사 + 비밀번호 유효성 검사
    if (checkId(userid.value) && checkPwd(userpw.value)) {
      //모두 유효

      //true 반환되면 아이디 비밀번호 정보 저장 후 formaction으로 보냄
      checkRemeberLoginInfo();
      return true;
    } else {
      //1.2 모두 또는 일부 유효하지않음

      alert("아이디 또는 비밀번호를 올바르게 입력해주세요.");
      return false;
    }
  } else {
    //아이디나 비밀번호 둘중 하나, 또는 모두 입력되지않음

    //비어있는 곳으로 포커스.
    if (checkNullInput(userid) == false) {
      //두개 모두 false인 경우(두개모두 미입력된 경우), 또는 아이디기 false를 반환한 경우(아이디 미입력 경우)

      userid.focus();
      return false;
    } else {
      //비밀번호 미입력한 경우

      userpw.focus();
      return false;
    }
  }
  // 이메일 유효성 검사
  function emailValidChk(email) {
    if (pattern.test(email) === false) {
      return false;
    } else {
      return true;
    }
  }
}

function checkNullInput(input) {
  //인풋 값 입력 여부를 확인하는 함수 //input element를 파람으로 받는다

  if (userpw.value == "") {
    console.log("로그인 정보 미입력");
    return false;
  } else {
    console.log("로그인 정보 입력");
    return true;
  }
}
function checkRemeberLoginInfo() {
  //웹스토리지 이용하여 저장 또는 삭제

  let userid = idInput.value;

  if (chkRemember.checked == true) {
    localStorage.setItem(idKey, userid);
    alert("아이디값 저장");
  }
}
