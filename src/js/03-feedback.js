import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = form.querySelector('input');
const textAreaEl = form.querySelector('textarea');

const dataStore = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';
const localStorageData = { email: '', message: '' };
// console.log(localStorage);
// console.log(localStorageData);

document.addEventListener('DOMContentLoaded', checkingLocaleStorage);
form.addEventListener('input', throttle(localStorageUpdate, 500));
form.addEventListener('submit', retrievingData);

function localStorageUpdate({ target }) {
  if (target.getAttribute('type') === 'email') {
    localStorageData.email = target.value;
  } else if (target.getAttribute('name') === 'message') {
    localStorageData.message = target.value;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localStorageData));
}

function checkingLocaleStorage() {
  const localStorageObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(localStorage);
  inputEl.value = localStorageObj.email || '';
  textAreaEl.value = localStorageObj.message || '';
}

function retrievingData(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  dataStore.email = email.value;
  dataStore.message = message.value;
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(dataStore);
}
