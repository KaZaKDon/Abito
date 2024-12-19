const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main_list");

const cardArray = [
  {
    id: 0,
    title: "1й товар",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/plenka.png",
  },
  {
    id: 1,
    title: "2й товар",
    price: "1570 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/plenka.png",
  },
  {
    id: 2,
    title: "3й товар",
    price: "5170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/plenka.png",
  },
  {
    id: 3,
    title: "4й товар",
    price: "1702 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/plenka.png",
  },
  {
    id: 4,
    title: "5й сорт",
    price: "1710 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/plenka.png",
  },
  {
    id: 5,
    title: "2й сорт",
    price: "1170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/plenka.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";

  cardList.forEach((item, idx) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <a href="product.html" class="content-main_list-item">
                  <img
                    class="content-main_list-item_img"
                    src="${item.img}"
                    alt="${item.img}"
                  />
                  <h5 class="content-main_list-item_title">
                    ${item.title}
                  </h5>
                  <strong class="content-main_list-item_price">${item.price}</strong>
                  <div class="content-main_list-item-desc_box">
                    <span class="content-main_list-item_desc"
                      >${item.address}</span
                    >
                    <span class="content-main_list-item_desc"
                      >${item.date}</span
                    >
                  </div>
                </a>`
    );
  });
};

const filterArrey = (arrey, value) => {
  return arrey.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.rowGap = "normal";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filterArrey(cardArray, searchInput.value));
});
