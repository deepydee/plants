# Plants

## Описание проекта
Plants – задание stage#0 в ходе выполнения которого вы сверстаете landing page сайта, который предлагает свои услуги по выращиванию растений в саду и ухода за ними, сделаете его адаптивным и интерактивным.

![deepydee github io_plants_](https://user-images.githubusercontent.com/35696895/235333899-be6437bd-0f75-4101-a156-3fd6db416b1d.png)

## Ключевые навыки:
- валидная семантическая адаптивная вёрстка
- легкоподдерживаемый читаемый код
- экспорт стилей и графики из Figma
- использование JavaScript для реализации указанного в задании функционала

## Этапы работы над проектом:
Задание состоит из трёх частей:
- Часть 1. Фиксированная вёрстка 
  - [Требования и критерии оценки](plants-part1.md)
  - в этой части задания необходимо сверстать страницу по макету, которая корректно отображается при ширине экрана не меньше 1440рх
  - проверяется валидность и семантичность вёрстки, её совпадение с макетом
  - примерное время выполнения - 20 часов
- Часть 2. Адаптивная вёрстка
  - [Требования и критерии оценки](plants-part2.md)
  - в этой части задания необходимо добавить адаптивность свёрстанной странице. При ширине страницы 768px и 380px ставится задача совпадения вёрстки с макетом, на остальных разрешениях до 320рх включительно достаточно обеспечить отсутствие горизонтальной полосы прокрутки.  
  Также на этом этапе в вёрстку добавляется адаптивное меню, для создания которого используется js.
  - проверяется совпадения вёрстки с макетом при ширине страницы  768px и 380рх, отсутствие горизонтальной полосы прокрутки, работа адаптивного меню
  - примерное время выполнения - 15 часов
- Часть 3. Добавление функционала
  - [Требования и критерии оценки](plants-part3.md)
  - в этой части задания используем JavaScript для добавления странице интерактивности: 
     - Смена фокуса на услугах в секции "Service and our projects"
     - Accordion в секции prices 
     - Реализуете кастомный select в разделе "Contacts"
  - проверяется реализованный функционал
  - примерное время выполнения - 15 часов

Продолжительность выполнения каждой части задания - 2 недели  
Форма проверки каждой части задания - кросс-чек  

[Макет в figma](https://www.figma.com/file/ntVt8IwlwzfVFMBuVVAze8/Plants?node-id=0%3A1)  

## Структура макета:
- Макет состоит из трёх основных блоков: `<header>`, `<main>`, `<footer>`
- на данном макете есть 5 `<section>`:
  - `welcome`
  - `about`
  - `service`
  - `prices` 
  - `contacts`
- для позиционирования `footer` и `header` допускается объединение с ближайшей секцией в обертку с общим фоном

## Технические требования
1. вёрстка валидная, семантическая, соответствующая макету
2. приложение корректно отображается и работает в браузере Google Chrome последней версии
3. запрещается использование CSS-фреймворков (`bootstrap`)
4. допускается использование CSS-препроцессоров (`Sass`), `normalize.css`
5. не рекомендуется использовать сброс стилей при помощи `reset.css`
6. запрещено добавление вёрстки картинкой, когда делается скрин части макета и вставляется в вёрстку. Для вёрстки используйте теги и символы, картинками можно добавлять изображения и иконки, а не элементы вёрстки (кнопки, блоки, секции)
