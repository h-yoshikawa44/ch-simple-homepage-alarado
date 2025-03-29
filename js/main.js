/* global window document HTMLInputElement */

import '../css/reset.css';
import '../css/style.css';
import 'wicg-inert';

const header = document.getElementById('header');
const main = document.getElementById('main');
const menu = document.getElementById('menu');

const openMenuButton = document.getElementById('open-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');

const headerThemeSwitch = document.getElementById('header-theme-switch');
const menuThemeSwitch = document.getElementById('menu-theme-switch');

/**
 * メニューを開く
 */
const openMenu = () => {
  menu.classList.add('menu--open');

  // 背景非活性制御
  header.setAttribute('inert', true);
  main.setAttribute('inert', true);
  document.body.classList.add('overflow-hidden');

  // aria 属性制御
  openMenuButton.setAttribute('aria-expanded', true);
  closeMenuButton.setAttribute('aria-expanded', true);
  menu.setAttribute('aria-hidden', false);
};

/**
 * メニューを閉じる
 */
const closeMenu = () => {
  menu.classList.remove('menu--open');

  // 背景非活性制御
  header.removeAttribute('inert', false);
  main.setAttribute('inert', false);
  document.body.classList.remove('overflow-hidden');

  // aria 属性制御
  openMenuButton.setAttribute('aria-expanded', false);
  closeMenuButton.setAttribute('aria-expanded', false);
  menu.setAttribute('aria-hidden', true);
};

/**
 * テーマ切り替え
 */
const switchTheme = () => {
  const isCurrentLight = document.body.dataset.theme === 'light';
  document.body.dataset.theme = isCurrentLight ? 'dark' : 'light';

  if (
    !(
      headerThemeSwitch instanceof HTMLInputElement &&
      menuThemeSwitch instanceof HTMLInputElement
    )
  ) {
    return;
  }

  if (isCurrentLight) {
    // light -> dark
    headerThemeSwitch.checked = false;
    menuThemeSwitch.checked = false;
  } else {
    // dark -> light
    headerThemeSwitch.checked = true;
    menuThemeSwitch.checked = true;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);

  headerThemeSwitch.addEventListener('change', switchTheme);
  menuThemeSwitch.addEventListener('change', switchTheme);
});

window.addEventListener('load', () => {
  document
    .getElementsByClassName('js-preload')[0]
    .classList.remove('js-preload');
});
