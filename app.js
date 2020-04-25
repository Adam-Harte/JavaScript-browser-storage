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
