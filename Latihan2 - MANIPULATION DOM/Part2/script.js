// Manipulation Node

// 1. document.createElement();							-> membuat element baru
const pBaru = document.createElement('p');
// 2. document.createTextNode();						-> membuat text node baru
const tbaru = document.createTextNode('Paragraf Baru');
// 3. node.appendChild();								-> menambahkan child ke parent
pBaru.appendChild(tbaru);

const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru);



// 4. node.insertBefore();
const liBaru = document.createElement('li');
const itBaru = document.createTextNode('Item Baru');

liBaru.appendChild(itBaru);

const ul = document.querySelector('ul');
const li = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li);

pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';



// New
// parentNode.append();
// parentNode.prepend();
// childNode.before();
// childNode.after();
// childNode.remove();
// childNode.replaceWith();
