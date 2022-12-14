// GANTI WARNA
const uWarna = document.getElementById('uWarna');
uWarna.addEventListener('click', function () {

	// document.body.style.backgroundColor = 'lightblue'
	// document.body.setAttribute('class', 'bg');
	document.body.classList.toggle('bg');
});


// GANTI WARNA RANDOM
const randomWarna = document.createElement('button');
randomWarna.setAttribute('type', 'button');
const tText = document.createTextNode('Ganti Warna Random');

randomWarna.appendChild(tText);
uWarna.after(randomWarna);


randomWarna.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1 );
	const g = Math.round(Math.random() * 255 + 1 );
	const b = Math.round(Math.random() * 255 + 1 );
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


// GANTI WARNA RGB
const wMerah = document.querySelector('input[name = merah]');
const wHijau = document.querySelector('input[name = hijau]');
const wBiru = document.querySelector('input[name = biru]');

wMerah.addEventListener('input', function() {
	const r = wMerah.value;
	const g = wHijau.value;
	const b = wBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

wHijau.addEventListener('input', function() {
	const r = wMerah.value;
	const g = wHijau.value;
	const b = wBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

wBiru.addEventListener('input', function() {
	const r = wMerah.value;
	const g = wHijau.value;
	const b = wBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});


// // GANTI WARNA MOUSE MOVE
// document.body.addEventListener('mousemove', function (e) {
// 	// posisi mouse
// 	// console.log(event.clientX);
// 	// // ukuran browser
// 	// console.log(window.innerWidth);

// 	const x = Math.round((event.clientX / window.innerWidth) * 255);	//untuk merah
// 	const y = Math.round((event.clientY / window.innerHeight) * 255);	//untuk hijau

// 	document.body.style.backgroundColor = 'rgb('+ x +','+ y +',100)';
// });