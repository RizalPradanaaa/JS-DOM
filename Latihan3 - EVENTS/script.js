// Latihan Event
// 1. Event Handler
	// a. Inline HTML atribute
const p2 = document.querySelector('.p2');

function ubahBg2() {
	p2.style.backgroundColor = 'lightblue';
}


	// b. Element method
const p3 = document.querySelector('.p3');

function ubahBg3() {
	p3.style.backgroundColor = 'lightgreen';
}
p3.onclick = ubahBg3;




// 2. addEventListener();
const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');

	const li = document.createElement('li');
	const itemb = document.createTextNode('item baru');

	li.appendChild(itemb);

	ul.appendChild(li);
});
