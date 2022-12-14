// // fun stopPropagation();
// const tombolX = document.querySelectorAll('.close');
// tombolX.forEach(function(tx) {
// 	tx.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault();
// 		e.stopPropagation();
// 	});
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(cr) {
// 	cr.addEventListener('click', function(e) {
// 		alert('ok');
// 	});
// });

// // fun stopPropagation untuk mengehentikan event di card agar tidak aktif di tombol x




// untuk memberi satu event saja dan membuat agar event akatif saat menambahkan element secara live
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	if (e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
	}
});
