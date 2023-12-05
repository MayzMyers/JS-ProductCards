import { productsObj } from "./products.js";
let cards = Array.from(document.querySelectorAll(".card"));
cards.forEach(function (elem, i) {
  elem.querySelector(
    ".card-img-top"
  ).src = `img/${productsObj[i].imgProduct}.webp`;
  elem.querySelector(".card-img-top").style.height = "164px";
  elem.querySelector(".card-img-top").alt = productsObj[i].imgProduct;
  elem.querySelector(".card-title").innerHTML = productsObj[i].nameProduct;
  elem.querySelector(".card-text").innerHTML = `<ul class="card-list">
    <li>Диагональ экрана: ${productsObj[i].screenDiagonal}</li>
    <li>Разрешение экрана: ${productsObj[i].screenResolution}</li>
    <li>Формат экрана: ${productsObj[i].screenFormat}</li>
    <li>Частота экрана: ${productsObj[i].screenBacklight} </li>
    <li>Операционная система: ${productsObj[i].os} </li>
    <li>Мощность звука: ${productsObj[i].soundPower} </li></ul>`;
  elem.querySelector(".btn").textContent = "Подробнее";
});
