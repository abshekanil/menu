const menu = [
  {
    id: 1,
    title: "Buttermilk Pancake",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    des: `Buttermilk pancake is a fluffy breakfast staple made with buttermilk, flour, eggs, sugar, baking powder, and butter. Served with syrup.`,
  },
  {
    id: 2,
    title: "Burger & Fries",
    category: "lunch",
    price: 12.99,
    img: "./images/item-2.jpeg",
    des: `Classic combo of juicy chicken burger and crispy fries, perfect comfort food featuring grilled chicken, lettuce, tomato, cheese, alongside golden potato fries.`,
  },
  {
    id: 3,
    title: "English Breakfast",
    category: "breakfast",
    price: 17.99,
    img: "./images/item-4.jpeg",
    des: `English breakfast typically includes eggs, bacon, sausages, baked beans, toast, mushrooms, tomatoes, and sometimes cheese, served with coffee.`,
  },
  {
    id: 4,
    title: "Big Mac Burger",
    category: "lunch",
    price: 11.99,
    img: "./images/item-5.jpeg",
    des: `A delectable twist on the classic, featuring two chicken patties, special sauce, lettuce, cheese, pickles, onions, and sesame seed buns.`,
  },
  {
    id: 5,
    title: "Oreo Milkshake",
    category: "shake",
    price: 8.99,
    img: "./images/item-6.jpeg",
    des: `Oreo milkshake made with crushed Oreo cookies, creamy vanilla ice cream, and milk, blended until smooth, topped with whipped cream.`,
  },
  {
    id: 6,
    title: "Bacon Burger",
    category: "lunch",
    price: 14.99,
    img: "./images/item-7.jpeg",
    des: `Enjoy a bacon burger featuring crispy strips of bacon layered with lettuce, tomato, onions, cheese, and special sauce on a toasted bun.`,
  },
  {
    id: 7,
    title: "Classic Burger",
    category: "dinner",
    price: 10.39,
    img: "./images/item-8.jpeg",
    des: `Classic chicken burger: grilled or crispy chicken patty, lettuce, tomato, cheese, onions, pickles, and mayo on a toasted bun.`,
  },
  {
    id: 8,
    title: "Steak",
    category: "dinner",
    price: 22.39,
    img: "./images/item-10.jpeg",
    des: `Savor a delicious steak cooked to perfection, served with mashed potatoes and grilled vegetables for a satisfying meal.`,
  },
];

let sectionCenter = document.querySelector(".section-center");

let allBtn = document.querySelector(".allBtn");
let breakfastBtn = document.querySelector(".breakfastBtn");
let lunchBtn = document.querySelector(".lunchBtn");
let shakesBtn = document.querySelector(".shakesBtn");
let dinnerBtn = document.querySelector(".dinnerBtn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<div class="item-container">
        <img src=${item.img} alt="img">
        <div class="menus">
            <div class="menu-details">
                <h4 class="item-name">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>  
            </div>
            <hr>
            <p class="item-text">${item.des}</p>
        </div>
        
       </div>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

allBtn.addEventListener("click", function () {
  displayMenuItems(menu);
});

breakfastBtn.addEventListener("click", function () {
  let breakfastFilter = menu.filter((items) => items.category === "breakfast");
  console.log(breakfastFilter);

  let displayMenu = breakfastFilter.map(function (item) {
    return `<div class="item-container">
        <img src=${item.img} alt="img">
        <div class="menus">
            <div class="menu-details">
                <h4 class="item-name">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>  
            </div>
            <hr>
            <p class="item-text">${item.des}</p>
        </div>
        
       </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});

lunchBtn.addEventListener("click", function () {
  let lunchfilter = menu.filter((items) => items.category === "lunch");

  let displayMenu = lunchfilter.map(function (item) {
    return `<div class="item-container">
        <img src=${item.img} alt="img">
        <div class="menus">
            <div class="menu-details">
                <h4 class="item-name">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>  
            </div>
            <hr>
            <p class="item-text">${item.des}</p>
        </div>
        
       </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});

shakesBtn.addEventListener("click", function () {
  let shakeFilter = menu.filter((items) => items.category === "shake");

  let displayMenu = shakeFilter.map(function (item) {
    return `<div class="item-container">
        <img src=${item.img} alt="img">
        <div class="menus">
            <div class="menu-details">
                <h4 class="item-name">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>  
            </div>
            <hr>
            <p class="item-text">${item.des}</p>
        </div>
        
       </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});

dinnerBtn.addEventListener("click", function () {
  let dinnerFilter = menu.filter((items) => items.category === "dinner");

  let displayMenu = dinnerFilter.map(function (item) {
    return `<div class="item-container">
        <img src=${item.img} alt="img">
        <div class="menus">
            <div class="menu-details">
                <h4 class="item-name">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>  
            </div>
            <hr>
            <p class="item-text">${item.des}</p>
        </div>
        
       </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});
