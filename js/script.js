"use strict"

// Завдання №1 - Функції
// Варіант 4 
let resultFunc;
if (2 > 1) {
	resultFunc = function showMessage() {
		console.log("Повідомлення");
	}
}
resultFunc();

console.log('----------------------------');

// Завдання №2 - Масиви
// Варіант 2 
let users = ["Ваня", "Интваш"];
console.log(users);
let userLast = users.push("Оля");
console.log(users);
let usersNewName = users[1] = "Петя";
console.log(users);
let deleteUserShow = users.shift();
console.log(deleteUserShow);
console.log(users);
users.splice(0, 0, "Маша", "Паша");
console.log(users);
console.log('----------------------------');
// Варіант 3
let arr = ["Ваня", "Иштван", "Оля"];
let deleteArr = arr.splice(0, 1);
console.log(deleteArr);
console.log('----------------------------');
// Варіант 4
let arrNew = "Ваня,Иштван,Оля";
let str = arrNew.split(",");
console.log(str);
console.log('----------------------------');

// Завдання №3 - DOM

// 1 Варіант
const itemSayHi = document.querySelector(".hw-DOM");
const itemAtrr = itemSayHi.getAttribute("data-say-hi");
console.log(itemAtrr);
console.log('----------------------------');

// 1.1 Варіант
itemSayHi.dataset.sayHi;
console.log(itemSayHi.dataset.sayHi);
console.log('----------------------------');

// 1.2 Варіант
const itemSayHi2 = document.querySelector("[data-say-hi]");
console.log(itemSayHi2);


// 2 Варіант
const itemName = document.getElementsByTagName("li")[12];
console.log(itemName);
console.log('----------------------------');

// 3 Варіант
const itemLike = document.querySelectorAll(".like");
console.log(itemLike);
console.log('----------------------------');

// Завдання №4 - Розміри та координати елемента

// 1 Варіант
const widthBrowse = window.innerWidth;
console.log(widthBrowse);

const widthBrowseLine = document.documentElement.clientWidth;
console.log(widthBrowseLine);

// 2 Варіант
function showMessage() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
}
setTimeout(showMessage, 1000);
/* 
function showMessage() {
	window.scrollTo(0, 100);
}
setTimeout(showMessage, 1000);
*/
// 3 Варіант
console.log(itemSayHi2.getBoundingClientRect());
console.log(document.elementFromPoint(600, 150));
console.log(itemSayHi2.getBoundingClientRect().top);

/* */
/*
let arr = ["Ваня", "Влад", "Діма"];
console.log(arr);

let arrNew = arr[2] = "Дмитро";
console.log(arrNew);
console.log(arr);
*/
/*
let arr = ["Ваня", "Влад", "Діма"];
console.log(arr);

arr.push("Женя");
console.log(arr);
*/

/*
let arr = ["Ваня"	, "Влад", "Діма"];
console.log(arr);

arr.shift();
console.log(arr);
*/

/*
let arr = ["Ваня", "Влад", "Діма"]
console.log(arr);

arr.pop();
console.log(arr);
*/


/*
let arr = ["Ваня", "Влад", "Діма"]
console.log(arr);

arr.unshift(1);
console.log(arr);

*/

/**/

/*
let arr = ["Ваня", "Влад", "Діма"]

delete arr[1];
console.log(arr);
console.log(arr.length);
*/


/*
// Метод splice

// удаляє просто
let arr = ["Ваня", "Влад", "Діма"]
arr.splice(1, 1)
console.log(arr);

// Удаляємо з права на ліво
let arr = ["Ваня", "Влад", "Діма"]
arr.splice(-2, 1)
console.log(arr);

// Удаляємо та повертаємо в змінну
let arr = ["Ваня", "Влад", "Діма"]
let deleteArr = arr.splice(1, 1)
console.log(deleteArr);

// Заміняє масив
let arr = ["Ваня", "Влад", "Діма"]
arr.splice(1, 1, "Вова")
console.log(arr);

// Добавляємо масиви
let arr = ["Ваня", "Влад", "Діма"]
arr.splice(2, 0, "Вова", "Олександр")
console.log(arr);
*/

/*
// Метод slice
let someText = "Привіт!"
console.log(someText.slice(2, 3));
let someArr = ["Ваня", "Влад", "Діма"];
console.log(someArr.slice(1, 2));

// Метод concat копіює масив та вставляє значення в кінці масивів
// Схожий на метод push()
let someArr = ["Ваня", "Влад", "Діма"];
console.log(someArr);
let someArrNew = someArr.concat("Женя");
console.log(someArrNew);

*/

/*
// Метод split перетворює рядок в масив ---
// split("/", 2) - розділяє та ставить кордон до коли розділяти
// join(",") - перетворює масив в рядок
let someString = "Ваня/Жека,Василь";
console.log(someString);
console.log(someString.split("/"));
*/

/*
let someArr = ["Ваня", "Влад", "Діма"];
let someArrNew = 0;
if (Array.isArray(someArr)) {
	console.log('Так це є масив даних');
} else {
	console.log('Ні це не є масивом даних');
}
*/

/*
// Метод перебору елементів масиву
let someArrs = ["Ваня", "Влад", "Діма"];
for (let i = 0; i < someArrs.length; ++i) {
	console.log(someArrs[i]);
}

console.log('-------------------');

someArrs.forEach(someArr => {
	console.log(someArr);
})

console.log('-------------------');

for (let someArr of someArrs) {
	console.log(someArr);
}
*/

// Функції
// callBack Function
/*
function calcSum(numOne, numTwo, more, less) {
	let sumNum = numOne + numTwo;
	if (sumNum > 5) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('більше > 5');
}

function showLessMessage() {
	console.log('більше < 5');
}

calcSum(1, 4, showMoreMessage, showLessMessage);
*/
/*
// Функціональний вираз 
let calcSum;
let someElseFunc;
function someFunc() {
	calcSum = 2 + 4;
	console.log(calcSum);
	someElseFunc = function () {
		console.log("Some texts");
	}
}
// Обовязково викликати головну функцію тоді працюватиме вираз someElseFunc
someFunc();
someElseFunc();
*/

/*
function calcSum(numOne, numTwo) {
	let numSum = numOne + numTwo;

	return numSum;

}
let funcResult = calcSum(1, 4);
console.log(funcResult);
*/

/*
let calcSum = function (numOne, numTwo) {
	let numSum = numOne + numTwo;
	console.log(numSum);
}
calcSum(1, 5);
*/

/*
function calcSum(numOne, numTwo) {
	let numSum = numOne + numTwo;
	console.log(numSum);
}
let result = calcSum;
result(1, 4);
calcSum(2, 5);
*/



/*
let calcSum = (numOne, numTwo) => {
	let result = numOne + numTwo;
	return result;
}
console.log(calcSum(1, 1));
*/


// Щоб використовувати DOM потрібно document. 
const htmlElement = document.documentElement;
console.log(htmlElement);
const htmlHead = document.head;
console.log(htmlHead);
const htmlBody = document.body;
console.log(htmlBody);

// -----------------------------------------------

/*
// lastElementChild, firstElementChild, parentElement Перший, останій потомок та батьківський
// firstChild, lastChild - Перший та останій потомок, але з табуляцією
const bodyLastChild = htmlBody.lastElementChild;
console.log(bodyLastChild);
const bodyFirstChild = htmlBody.firstElementChild;
console.log(bodyFirstChild);

// nextElementSibling previousElementSibling - наступний і попередній елемент одної вкладеності
const headNext = htmlHead.nextElementSibling;
console.log(headNext);

// Колекція потомків всередині елемента children
const childNodes = htmlBody.children;
console.log(childNodes);
*/
// -----------------------------------------------
/*
// Перебір колекцій
for (let i = 0; i < 2; ++i) {
	console.log(childNodes[i]);
}
// Перебір колекцій for ... of ... {}
for (let childNode of childNodes) {
	console.log(childNode);
}
*/
// -----------------------------------------------
/**/
const someItem = htmlBody.querySelector(".homework__title");
// .querySelector .querySelectorAll - Пошук та отримання елемента
/*

console.log(someItem);
const parentElement = someItem.parentElement;
console.log(parentElement);
*/
/*
// .closest("") - отримання головного батька
// а й перевіряє чи є вказаний селектор у самого об'єкту if === null то не існує
// const list = document.querySelector('.list');
// const isPageParent = list.closest('.page');
if (someItem.closest(".wrapper")) {
	console.log("Так, є");
} else {
	console.log("Ні, немає");
}
console.log(parentElement);
*/
/*
// innerHTML - отримати те що всередині(контент) елемента та(або) перезаписати його
const itemsTitle = htmlBody.querySelectorAll(".homework__title");
console.log(itemsTitle);
itemsTitle.forEach(itemTitle => {
	itemTitle.innerHTML = `<span>Dark So</span>`.toUpperCase();
	console.log(itemTitle.innerHTML);
})
*/

// Створення об'єктів
/*
const objectNew = document.createElement('div');
objectNew.innerHTML = `<span>Hello</span>`;
console.log(objectNew);

const wrap = document.querySelector(".wrapper");
*/
/*
// Вставка елемента
wrap.before(objectNew);
wrap.after(objectNew);

// всередину на початок
wrap.prepend(objectNew);

// всередину в кінець
wrap.append(objectNew);
*/

/*
"beforebegin" – вставити html безпосередньо перед page,
"afterbegin" – вставити html на початок page,
"beforeend" – вставити html в кінець page,
"afterend" – вставити html безпосередньо після page.

wrap.insertAdjacentHTML("beforeend", `
	<div class="block">
		<div class="block__el">1</div>
			  <div class="block__el">2</div>
	</div>
`)

// Вставка існуючого елементу
wrap.insertAdjacentElement("beforeend", someItem);

*/

// Клонування об'єкта .cloneNode() - без вміста  .cloneNode(true) - з вмістом
/*
const cloneTitle = someItem.cloneNode();
console.log(cloneTitle);
*/

// Видалення .remove()
// someItem.remove();

// Класи та стилі
/*
// Крапка не потрібна
.classname - перезаписує
.classname.add('') - додає
.classname.remove('') - видаляє
.classname.toggle('') - якщо є клас видаляємо, якщо немає додаємо
.classname.contains('') - перевірка, чи існує такий клас (true | false)
*/

// Важливо оперувати класами перевірками, умовами if else else if
/*
style.властивість = "значення";

// При повторі можливий перезапис

// #1
someItem.style.color = "red";

// #2
someItem.style.cssText = `
text-align: center;
font-size: 40px;
color: brown;
`;
*/

// Отримання стилів  ComputedStyle()
/*
const styleBlockTitle = getComputedStyle(someItem);
console.log(styleBlockTitle);

styleBlockTitle.marginBottom;

console.log(styleBlockTitle.marginBottom);
console.log(parseInt(styleBlockTitle.marginBottom));
*/

// Атрибути

/*
// Робота з атрибутами
const block = document.querySelector('.block');
//Перевіряємо наявність атрибута.
block.hasAttribute('name');
//Получаємо значення атрибута.
block.getAttribute('name');
//Установлюємо значення атрибута.
block.setAttribute('name', 'value');
//Удаляємо атрибут.
block.removeAttribute('name');
*/
/*
someItem.setAttribute("data-animation-speed", "1000");
if (someItem.hasAttribute("data-animation-speed", "1000")) {
	console.log(someItem);
}
console.log(Number(someItem.getAttribute("data-animation-speed")));
// =======================
someItem.dataset.animationSpeed = '1000';
console.log(+someItem.dataset.animationSpeed + 100);
console.log(someItem.hasAttribute('data-animation-speed'));

someItem.hidden = true;
*/

// Розміри та прокрутка
/* */
/*
(без прокрутки)
const widthWindow = window.innerWidth;
const heightWindow = window.innerHeight;
console.log(widthWindow);
console.log(heightWindow);

(з прокруткою)
const windowClientWidth = htmlElement.clientWidth;
console.log(windowClientWidth);
const windowClientHeight = htmlElement.clientHeight;
console.log(windowClientHeight);
*/

/*
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

// Початок з поточного місця (з 200)
/*
window.scrollBy(0, 200);
console.log(window.scrollY);
 */

/*
window.scrollTo({
	top: 200,
	left: 0,
	behavior: "smooth"
});
*/

// Прокрутка до об'єкту
/*
function scrollToBlock() {
	someItem.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		someItem: "start",
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "start",
		behavior: "smooth"
	})
}
scrollToBlock();
*/

// Позиція обєкта

/*
console.log(someItem.offsetParent);
console.log(someItem.offsetTop);
console.log(someItem.offsetLeft);
*/

// Розміри обєкта
/*
console.log(someItem.offsetWidth);
console.log(someItem.offsetHeight);
*/

// Координати відносно вікна
/*
console.log(someItem.getBoundingClientRect());
console.log(someItem.getBoundingClientRect().top);
console.log(someItem.getBoundingClientRect().left);
*/

// Отримання об'екта по кординатам
// document.elementFromPoint(x, y);
/*
// працює відносно вікна браузера, ловить обєкт в межах вказаних параметрів
const someObject = document.elementFromPoint(200, 200);
console.log(someObject);
*/

// Події

// Синтаксис події
// elem/document.addEventListener("ім'я події", func, options)
// elem/document.addEventListener("ім'я події", ()=>{ code }, options);

// const links = htmlBody.querySelectorAll(".link");

// Недолік - не можна виконати декілька подій
/*
link.onclick = function () {
	console.log('Hi');
}
*/
// Працює і можна виконати декілька подій
// Недолік - постійно прослуховується і грузить систему
// та працює тільки для першого елементу 
/*
link.addEventListener("click", function () {
	console.log("Hi");
});
*/

// Подія event - заповнюється корисними варіантами виникнення події
/*
const options = {
	"capture": false, // фаза, на якій повинен спрацювати обробник
	"once": true, // якщо істина, тоді обробник буде
	//автоматично удалён після виконання.
	"passive": false // якщо true, то вказує, що обробник
	//ніколи не викликає preventDefault()
}

link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('Hi');
	link.removeEventListener("click", linkAction);
}
*/
/*
link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('Hi');
	// Відключення дії за замовченням!
	if (link.dataset.youtube === "false") {
		event.preventDefault();
	}
}
*/
// Події для багатьох елементів
const links = document.querySelector(".link");

// links.forEach(link => {
// 	link.addEventListener("click", linkAction);
// 	function linkAction(event) {
// 		if (link.dataset.youtube === "false") {
// 			console.log('Hi');
// 			event.preventDefault();
// 		};
// 	};
// });

// Недолік - багато подій грузить систему
/*
links.forEach(link => {
	link.addEventListener("click", buttonAction)
	function buttonAction(event) {
		if (link.dataset.youtube === "false") {
			console.log('Hi');
			event.preventDefault();
		}
	}
});
*/
// document.addEventListener("click", action);
// Делегування події
/*
function action(event) {
	const targetItem = event.target;
	// console.log(targetItem);
	// if (targetItem.classList.contains("link")) {
	// 	console.log('Hi');
	// 	event.preventDefault();
	// };
	if (targetItem.closest(".link")) {
		console.log('Hi');
		event.preventDefault();
	};
};
*/

// Тип події
//console.log(event.type);
// Об'єкт на якому створив обробник
//console.log(event.target);
// Положення курсора по осі X відносно вікна
//console.log(event.clientX);
// Положення курсора по осі Y відносно вікна
//console.log(event.clientY);

// Положення курсора по осі X відносно документу
//console.log(event.pageX);
// Положення курсора по осі Y відносно документу
//console.log(event.pageY);

// Усі деталі події
//console.log(event);

// Основні події миші
/*
click, mouseenter, mouseleave
*/

// mouseenter - наведення миші
// mouseleave - переведення миші
// mousemove - рух миші

window.addEventListener("scroll", wScroll);
function wScroll(event) {
	// console.log(scrollY);
	console.log(someItem.getBoundingClientRect().top);
};

// Відбудеться тільки тоді коли побудується дерево ДОМ
window.addEventListener("DOMContentLoaded", dmLoaded);
function dmLoaded(e) {

}

window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');
}

