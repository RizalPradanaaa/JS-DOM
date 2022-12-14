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
		e.preventDefault();						
	});
});

// fun prevent default digunakan utk mengahapus aksi deafult,
// misal pd tag a, hrefnya kosong maka akan kembali kehalaman tersebut dan merefreshnya.
// jadi kita gunakan prevent untuk mengehntukan aksi defautnya yaitu refresh