// // setTimeout();
// // memberi waktu sebelum fun dijalankan

// // akan menampilkan 'ok' setelah 5 sec
// const time = setTimeout(function() {
// 	console.log('ok');
// }, 5000);
// // menghentikan time out
// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
// 	clearTimeout(time);
// 	console.log('yes');
// });


// // setInterval();
// // mengulang sebuah fun sesuai waktu yang diberikan

// // mengulang 'ok' setiap 2 sec
// const inter = setInterval(function() {
// 	console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
// 	clearInterval(inter);
// 	console.log('yes');
// });






// menghitung Waktu mundur
const hariDituju = new Date('May 09, 22 16:00:00').getTime();

const hitungMundur = setInterval(function() {
	const hariIni = new Date().getTime();
	
	const selisih = hariDituju - hariIni;

	const hari = Math.floor( selisih / (1000 * 60 * 60 * 24));
	const jam = Math.floor( selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	const menit = Math.floor( selisih % (1000 * 60 * 60) / (1000 * 60));
	const detik = Math.floor( selisih % (1000 * 60) / (1000));

	const text = document.getElementById('teks');

	text.innerHTML = 'Sisa Waktu Anda Tinggal ' + hari + ' Hari ' + jam + ' jam ' + menit + ' menit ' + detik +' detik ';

	if ( selisih <= 0 ) {
		text.innerHTML = 'Waktu Habis'
	}
}, 1000);

hitungMundur();

