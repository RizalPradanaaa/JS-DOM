// Manipulasi Element

// 1. node.innerHTML
const judul = document.getElementsByTagName('h1')[0];
judul.innerHTML = 'Iam Rizal Pradana';


// 2. node.style.atribute(atribute css)
judul.style.textDecoration = 'underline';


// 3. node.setAttribute('name', 'value');	-> membuat atribut
// node.getAttribute('name'); 			-> cek nilai atribut
// node.removeAttribute('name');		-> hapus atribut
const p1 = document.getElementById('p1');
p1.setAttribute('class', 'pr');


// 3. element.classList();
// element.classList.add(nm);			-> menambahkan class
// element.classList.remove(nm);		-> menghapus
// element.classList.toggle(nm);		-> jika ada class nm : mka dihapus, jika tdk ada nm : mk dtmbah
// element.classList.item(index);		-> cek class brdasarkan index
// element.classList.contains(nm);		-> cek apkh class nm ada
// element.classList.replace(nml, nmb);	-> nml diganti dngan nmb