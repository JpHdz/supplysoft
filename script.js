'use strict';
const menuMain = document.querySelector('.ph-list');
const sections = document.querySelector('.nav-all-sections');
const profile = document.querySelector('.ph-user-circle');
const profileContainer = document.querySelector('.profile-container ');

menuMain.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('si');
  sections.classList.toggle('display-none');
});

profile.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('si');
  profileContainer.classList.toggle('display-none');
});
