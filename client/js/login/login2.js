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

const idKey = "uniqueID";
const userid = document.getElementById("userid");
const userpw = document.getElementById("userpw");
const pwcheck = document.getElementById("pwcheck");
const email = document.getElementById("email");
const loginBtn = document.querySelector(".loginBtn");

let useridPass = false;

// 아이디 정규식
function idReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{3,16}$/;
  return re.test(String(text));
}

// 비밀번호 정규식
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;
  return re.test(String(text).toLowerCase());
}

// 이메일 정규식
function emailReg(text) {
  const re =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return re.test(String(text).toLowerCase());
}

// 랜덤 유니크 아이디 생성기
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

// 로컬스토리지에 JSON형태로 넣기
localStorage.setItem("uniqueID", JSON.stringify(id));

// -------------------------------------------------------------------------------------------
// Post 통신

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
// renderUserList();

// async function fetching() {
//   const user = tiger.get("http://localhost:3000/reviewChoice");
//   const res = await user;
//   const authUser = res.data.filter((e) => e.userId === "userid")[0];

//   return authUser;
// }
// const authUser = await fetching();

// console.log(authUser);
// -------------------------------------------------------------------------------------------
function check(form) {
  if (form.userid.value == "id" && form.userpassword.value == "1234") {
    window.open("target.html");
  }
  elas;
  {
    alert("Error Userid");
  }
}
function login() {
  //입력값 여부 확인
  if (checkNullInput(userid) && checkNullInput(userpw)) {
    //값이 모두 입력된 경우

    //아이디 유효성 검사 + 비밀번호 유효성 검사
    if (checkId(userid.value) && checkPwd(userpw.value)) {
      //모두 유효

      //true 반환되면 아이디 비밀번호 정보 저장 후 formaction으로 보냄
      checkRemeberLoginInfo();
      return true;
    } else {
      //모두 또는 일부 유효하지않음

      alert("아이디 또는 비밀번호를 올바르게 입력해주세요.");
      return false;
    }
  } else {
    //아이디나 비밀번호 둘중 하나, 또는 모두 입력되지않음

    //비어있는 곳으로 포커스
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
  function emailValidChk(email) {
    if (pattern.test(email) === false) {
      return false;
    } else {
      return true;
    }
  }
}
