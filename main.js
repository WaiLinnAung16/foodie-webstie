import "./style.scss";
// import "waypoints/lib/noframework.waypoints";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

let options = {
  strings: ["Foods...", "Drinks...", "Time..."],
  typeSpeed: 90,
  backSpeed: 90,
  delay: 900,
  loop: true,
};

new Typed("#type", options);

let toDown = {
  distance: "50px",
  origin: "top",
  interval: 300,
  duration: 1500,
};
ScrollReveal().reveal(".top_down", toDown);

let toLeft = {
  distance: "50px",
  origin: "right",
  interval: 300,
  duration: 1500,
};
ScrollReveal().reveal(".to-left", toLeft);

let toRight = {
  distance: "50px",
  origin: "left",
  interval: 300,
  duration: 1500,
};
ScrollReveal().reveal(".to-right", toRight);

let menuRow = document.getElementById("menu_row");

let menulists = [
  {
    title: "Barbecue Salad",
    description: "Special Delious Dish",
    price: 22.2,
    currency: "$",
    img: "./img/plate1.png",
  },
  {
    title: "Salad with Fish",
    description: "Special Delious Dish",
    price: 30.8,
    currency: "$",
    img: "./img/plate2.png",
  },
  {
    title: "Spanish Salad",
    description: "Special Delious Dish",
    price: 21,
    currency: "$",
    img: "./img/plate3.png",
  },
];

menulists.forEach((menu) => {
  let div = document.createElement("div");
  div.classList.add("col-3", "top_down");
  div.innerHTML = `
  <div class="card_border p-3">
            <div class="text-center mb-5">
              <img
                src="${menu.img}"
                alt="berbecue salad"
                class="w-75 card_img"
              />
            </div>
            <div>
              <h5 class="fw-bold">${menu.title}</h5>
              <p class="text-primary small">${menu.description}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-bold mb-0">${menu.currency}${menu.price}</p>
              <a href="#" class="btn btn-primary">
                <i class="bi bi-cart-plus"></i>
              </a>
            </div>
          </div>
  `;
  menuRow.append(div);
});
