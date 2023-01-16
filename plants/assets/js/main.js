let evaluation = `
  Score: 110 / 110
  - [x] Вёрстка валидная. (10/10)

  - [x] Вёрстка семантическая. (20/20)
    - [x] <header>, <main>, <footer>. (3/3)
    - [x] пять элементов <section>. (3/3)
    - [x] только один заголовок <h1>. (3/3)
    - [x] четыре заголовка <h2>. (3/3)
    - [x] один элемент <nav>. (3/3)
    - [x] два списка ul > li > a (панель навигации, ссылки на соцсети). (3/3)
    - [x] пять кнопок <button>. (2/2)

  - [x] Вёрстка соответствует макету. (48/48)
    - [x] блок <header>. (6/6)
    - [x] секция welcome. (7/7)
    - [x] секция about. (7/7)
    - [x] секция service. (7/7)
    - [x] секция prices. (7/7)
    - [x] секция contacts. (7/7)
    - [x] секция <footer>. (7/7)

  - [x] Требования к css. (12/12)
    - [x] для построения сетки используются флексы или гриды. (2/2)
    - [x] при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону. (2/2)
    - [x] фоновый цвет тянется на всю ширину страницы. (2/2)
    - [x] иконки добавлены в формате .svg. (2/2)
    - [x] изображения добавлены в формате .jpg или .png. (2/2)
    - [x] есть favicon. (2/2)

  - [x] Интерактивность, реализуемая через css. (20/12)
    - [x] плавная прокрутка по якорям. (5/5)
    - [x] cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/. (5/5)
    - [x] интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета. (5/5)
    - [x] плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы. (5/5)
`;

// console.log(evaluation);

// Get all items with class="nav-link" inside the container
let navLinks = document.getElementsByClassName("nav-link");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("nav-active");
    console.log(current);
    current[0].className = current[0].className.replace(" nav-active", "");
    this.className += " nav-active";
  });
}

// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.navbar');
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
  }, 1000);  
}

navItems.forEach(el => el.addEventListener('click', closeMenu));