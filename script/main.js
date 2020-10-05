'use strict';

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');


const openMenu = () => {
  catalog.classList.add('open');
  overlay.classList.add('active');
};

const closeMenu = () => {
  closeSubMenu();
  catalog.classList.remove('open');
  overlay.classList.remove('active');
};

const openSubMenu = event => {
  event.preventDefault();
  const catalogItemList = event.target.closest('.catalog-list__item');
  if (catalogItemList) {
    subCatalogHeader.innerHTML = catalogItemList.innerHTML;
    subCatalog.classList.add('subopen');
  };
}

const closeSubMenu = () => {
  subCatalog.classList.remove('subopen');
}

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalogList.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeMenu();
  }
});

