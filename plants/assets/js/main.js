let evaluation = `
  Score: 85 / 85
  - [x] 1. Вёрстка соответствует макету. Ширина экрана 768px (24/24)
      - [x] блок <header> (2/2)
      - [x] секция welcome (3/3)
      - [x] секция about (4/4)
      - [x] секция service (4/4)
      - [x] секция prices (4/4)
      - [x] секция contacts (4/4)
      - [x] блок <footer> (3/3)

  - [x] 2. Вёрстка соответствует макету. Ширина экрана 380px (24/24)
      - [x] блок <header> (2/2)
      - [x] секция welcome (3/3)
      - [x] секция about (4/4)
      - [x] секция service (4/4)
      - [x] секция prices (4/4)
      - [x] секция contacts (4/4)
      - [x] блок <footer> (3/3)

  - [x] 3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется (15/15)
    - [x] нет полосы прокрутки при ширине страницы от 1440рх до 380px (7/7)
    - [x] нет полосы прокрутки при ширине страницы от 380px до 320рх (8/8)

  - [x] 4. На ширине экрана 380рх и меньше реализовано адаптивное меню (22/22)
    - [x] при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка (2/2)
    - [x] при нажатии на бургер-иконку плавно появляется адаптивное меню (4/4)
    - [x] адаптивное меню соответствует цветовой схеме макета (4/4)
    - [x] при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран (4/4)
    - [x] ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (4/4)
    - [x] при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна (4/4)
`;

// console.log(evaluation);

// Get all items with class="nav-link" inside the container
let navLinks = document.getElementsByClassName("nav-link");
let navMobLinks = document.getElementsByClassName("mob-nav-item");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("nav-active");
    current[0].className = current[0].className.replace(" nav-active", "");
    this.className += " nav-active";
  });
}

for (let i = 0; i < navMobLinks.length; i++) {
  navMobLinks[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("nav-active");
    current[0].className = current[0].className.replace(" nav-active", "");
    this.className += " nav-active";
  });
}

// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}

toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 400);  
}

navItems.forEach(el => el.addEventListener('click', closeMenu));

const main = document.getElementById('main');
main.addEventListener('click', closeMenu);

// Fixed header
// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// let header = document.getElementById("header");

// Get the offset position of the navbar
// let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// custom select

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');

const contactInfo = document.querySelector('.contact-info');
const city = document.getElementById('city-cell');
const phone = document.getElementById('phone-cell');
const address = document.getElementById('address-cell');

const mediaMobile = window.matchMedia('(max-width: 380px)');
const contactImg = document.querySelector('.contact-img');

const contacts = [
  {'city': 'Yonkers, NY', 'phone': '+1 914 678 0003', 'address': '511 Warburton Ave'},
  {'city': 'Canandaigua, NY', 'phone': '+1 585 393 0001', 'address': '151 Charlotte Street'},
  {'city': 'Sherrill, NY', 'phone': '+1 315 908 0004', 'address': '14 WEST Noyes BLVD'},
  {'city': 'New York City', 'phone': '+1 212 456 0002', 'address': '9 East 91st Street'},
];

selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
  contactInfo.classList.remove('visible');
});

optionsList.forEach(o => {
  o.addEventListener('click', () => {
    selected.innerText = o.querySelector('label').innerText;
    o.querySelector("input").checked = true; //line that selects the radio button when the div is clicked
    optionsContainer.classList.remove('active');
    contactInfo.classList.add('visible');

    if (selected.innerText !== 'City') {
      selected.style.backgroundColor = '#c1e698';
    }

    let current = contacts.filter(item => item.city == selected.innerText);

    city.innerText = current[0].city;
    phone.innerText = current[0].phone;
    address.innerText = current[0].address;
    
    if (mediaMobile.matches) {
      contactImg.style.opacity = '0';
    }

  })
});