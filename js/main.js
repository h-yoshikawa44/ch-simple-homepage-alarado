/* global window document */

import '../css/reset.css';
import '../css/style.css';
import 'wicg-inert';

const header = document.getElementById('header');
const main = document.getElementById('main');
const menu = document.getElementById('menu');

/**
 * メニューを開く
 */
const openMenu = () => {
  menu.classList.add('menu--open');
  header.setAttribute('inert', true);
  main.setAttribute('inert', true);
  document.body.classList.add('overflow-hidden');
};

/**
 * メニューを閉じる
 */
const closeMenu = () => {
  menu.classList.remove('menu--open');
  header.removeAttribute('inert', false);
  main.setAttribute('inert', false);
  document.body.classList.remove('overflow-hidden');
};

window.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.getElementById('open-menu-button');
  openMenuButton.addEventListener('click', openMenu);

  const closeMenuButton = document.getElementById('close-menu-button');
  closeMenuButton.addEventListener('click', closeMenu);
});
