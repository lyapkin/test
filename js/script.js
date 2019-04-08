function toNext() {
	let elem = document.getElementById('comments__first');

	if (elem.previousElementSibling) {
		elem.removeAttribute('id');
		elem.previousElementSibling.id = 'comments__first';
		elem.previousElementSibling.previousElementSibling.id = 'comments__second';
		elem.previousElementSibling.previousElementSibling.previousElementSibling.id = 'comments__third';
	}
}

function toPrevious() {
	let elem = document.getElementById('comments__first');

	if (elem.nextElementSibling) {
		elem.id = 'comments__second';
		elem.nextElementSibling.id = 'comments__first';
		elem.previousElementSibling.id = 'comments__third';
		
	}
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.addEventListener('click', toNext);
previous.addEventListener('click', toPrevious);




function toToggleMenu() {
	const nav = document.getElementById('nav');

	if(!nav.hasAttribute('class')) {
		nav.setAttribute('class', 'open-menu');
	} else {
		nav.removeAttribute('class');
	}
}

const menu = document.getElementById('menu');

menu.addEventListener('click', toToggleMenu);