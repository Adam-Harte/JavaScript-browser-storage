// localStorage
localStorage.setItem('userId', '123');
localStorage.setItem('name', 'Adam');
localStorage.setItem(
	'userData',
	JSON.stringify({
		age: 27,
		hobbies: ['gaming', 'reading', 'IT', 'tennis'],
	})
);

console.log(localStorage.getItem('userId'));
console.log(localStorage.key(1));
console.log(JSON.parse(localStorage.getItem('userData')));

console.log(localStorage.length);
localStorage.removeItem('userId');
console.log(localStorage.length);
localStorage.clear();
console.log(localStorage.length);

sessionStorage.setItem('userId', '123');
sessionStorage.setItem('name', 'Adam');
sessionStorage.setItem(
	'userData',
	JSON.stringify({
		age: 27,
		hobbies: ['gaming', 'reading', 'IT', 'tennis'],
	})
);

console.log(sessionStorage.getItem('userId'));
console.log(sessionStorage.key(1));
console.log(JSON.parse(sessionStorage.getItem('userData')));

console.log(sessionStorage.length);
sessionStorage.removeItem('userId');
console.log(sessionStorage.length);
sessionStorage.clear();
console.log(sessionStorage.length);

// cookies
console.log(document.cookie);
document.cookie = 'userID=123';
document.cookie = 'name=Neil';
document.cookie = 'authorized=true; max-age=60';

console.log(document.cookie);

console.log(document.cookie.split(';'));

setTimeout(() => {
	console.log(document.cookie);
}, 70000);

// indexedDB
const dbRequest = indexedDB.open('StorageDummy', 1);
let db;

dbRequest.onsuccess = function (event) {
	db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
	db = event.target.result;

	const objStore = db.createObjectStore('products', { keyPath: 'id' });

	objStore.transaction.oncomplete = function (event) {
		const productsStore = db
			.transaction('products', 'readwrite')
			.objectStore('products');
		productsStore.add({
			id: 'p1',
			price: 200,
			quantity: 3,
			title: 'First product',
		});
	};
};

dbRequest.onerror = function (event) {
	console.log('Error!');
};

const productsStore = db
	.transaction('products', 'readwrite')
	.objectStore('products');
productsStore.add({
	id: 'p2',
	price: 150,
	quantity: 2,
	title: 'Second product',
});

const product2 = productsStore.get('p2');
product2.onsuccess = function () {
	console.log(product2.result);
};
