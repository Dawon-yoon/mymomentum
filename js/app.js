const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoListBox = document.querySelector("#todo-list__box");
const contentBox = document.querySelector(".content-box__right");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
  removeHiddenClassName();
}

function paintGreetings(userName) {
  greeting.innerText = `hello, ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function removeHiddenClassName() {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoListBox.classList.remove(HIDDEN_CLASSNAME);
  contentBox.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
  removeHiddenClassName();
  //다른 hidden클래스를 지워주는 함수 만들어서 넣기
}
