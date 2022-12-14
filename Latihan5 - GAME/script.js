function pilihanComp() {
	const comp = Math.random();
	if ( comp < 0.35 ) return 'kertas';
	if ( comp >= 0.35 && comp < 0.65 ) return 'batu';
	return 'gunting';
}

function rules(comp, player) {
	if (comp == player) return 'Seri';
	if (comp == 'kertas') return (player == 'gunting') ? 'Menang' : 'Kalah';
	if (comp == 'batu') return (player == 'kertas') ? 'Menang' : 'Kalah';
	if (comp == 'gunting') return (player == 'batu') ? 'Menang' : 'Kalah';

}


function putar() {
	const imgKomp = document.querySelector('.img-komputer');
	const img = ['batu', 'gunting', 'kertas' ];
	let i = 0;

	const waktuMulai = new Date().getTime();

	setInterval(function() {
		if ( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return;
		}

		imgKomp.setAttribute('src', 'img/' + img[i++] + '.jpg');
		if ( i == img.length) i = 0;
	}, 100);
}



const pilihanPlayer = document.querySelectorAll('li img');

pilihanPlayer.forEach(function(pil) {
	
	pil.addEventListener('click', function() {
		const pilComp = pilihanComp();
		const pilPlayer = pil.className;

		const hasil = rules(pilComp, pilPlayer);

		putar();

		setTimeout(function() {
			const img = document.querySelector('.img-komputer');
			img.setAttribute('src', 'img/'+ pilComp + '.jpg');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);		
	});
});