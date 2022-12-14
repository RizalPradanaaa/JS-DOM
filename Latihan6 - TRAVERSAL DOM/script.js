// Event Handler

// const tombolx = document.querySelector('.close');

// tombolx.addEventListener('click', function () {
// 	const card = document.querySelector('.card');
// 	card.style.display = 'none';
// });


// Dom Traversal
const tombolX = document.querySelectorAll('.close');
tombolX.forEach(function(tx) {
	tx.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
	});
});