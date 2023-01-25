import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = form.querySelector('input');
const textAreaEl = form.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const data = {};

document.addEventListener('DOMContentLoaded', checkingLocaleStorage);
form.addEventListener('input', throttle(localStorageUpdate, 500));
form.addEventListener('submit', retrievingData);

function localStorageUpdate({ target }) {
  if (target.getAttribute('type') === 'email') {
    data.email = target.value;
  }
  if (target.getAttribute('name') === 'message') {
    data.message = target.value;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));

}

function checkingLocaleStorage() {
  const localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  inputEl.value = localStorageData.email || '';
  textAreaEl.value = localStorageData.message || '';
}

function retrievingData(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  data.email = email.value;
  data.message = message.value;
  localStorage.clear();
  form.reset();
  console.log(data);
}
