const login = document.querySelector('#login');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const section = document.querySelector('#greeting-section');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLogoutHandler() {
  localStorage.clear();
  location.reload();
}

function onLoginSubmit(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 11) {
    greeting.innerText = `Good morning, ${username}.`;
  } else if (hours >= 11 && hours < 17) {
    greeting.innerText = `Good afternoon, ${username}.`;
  } else {
    greeting.innerText = `Good evening, ${username}.`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const logout = document.getElementById('logout');
  logout.classList.remove(HIDDEN_CLASSNAME);
  logout.addEventListener('click', onLogoutHandler);
  section.appendChild(logout);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
