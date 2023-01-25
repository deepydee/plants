let evaluation = `
  Score: 85 / 85
  - [x] 1. При нажатии на кнопки:Gargen, Lawn, Planting происходит смена фокуса на услугах в разделе service (50/50)  
      - [x] При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной (20/20)
      - [x] Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг (20/20)
      - [x] Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur (10/10)

  - [x] 2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах (50/50)
      - [x] При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым (25/25)
      - [x] Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается (25/25)

  - [x] В разделе contacts реализован select с выбором городов (25/25)
    - [x] В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе (15/15)
    - [x] При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу (10/10)
`;

// console.log(evaluation);

/**
 * Active menu
 */

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

/**
 * Burger Menu
 */
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

/**
 * Sticky Header
 */

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

/**
 * Contact Section
 */

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');

const contactInfo = document.querySelector('.contact-info');
const city = document.getElementById('city-cell');
const phone = document.getElementById('phone-cell');
const address = document.getElementById('address-cell');
const contactPhone = document.getElementById('contact-phone');

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
    contactPhone.setAttribute('href', 'tel:' + String(current[0].phone).replaceAll(' ', ''));

    if (mediaMobile.matches) {
      contactImg.style.opacity = '0';
    }

  })
});

/**
 * Service Buttons
 */

const serviceButtons = document.querySelector('.service-buttons');
const services = document.querySelectorAll('.card');

serviceButtons.addEventListener('click', (event) => {
  let activeServices = [];
  let cnt = 0;

  event.target.classList.toggle('active');

  for (let button of event.currentTarget.children) {
    if (button.classList.contains('active')) {
      cnt++;
      activeServices.push(button.dataset.service);
    }
    if (cnt === 3) {
      activeServices = [];
      event.currentTarget.querySelectorAll('.active').forEach((e) => {
        e.classList.remove('active');
      });
    }
  }

  for (let elem of services) {
    if (activeServices.includes(elem.dataset.service)) {
      elem.classList.remove('blured');
    } else {
      elem.classList.add('blured');
    }
  }

  if (activeServices.length === 0) {
    services.forEach((e) => e.classList.remove('blured'));
  }

});

/**
 * Price Accordion
 */

const priceAccordion = document.querySelector('.price-accordion');

priceAccordion.addEventListener('click', (event) => {
  let item = event.target.closest('.dropdown');
  if (!item) return;
  if (!event.currentTarget.contains(item)) return;

  if(item.closest('.price-item').classList.contains('active')) {
    item.closest('.price-item').classList.remove('active');
  } else {
    document.querySelector('.price-item.active')?.classList.remove('active');
    item.closest('.price-item').classList.add('active');
  }
});