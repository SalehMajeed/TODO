console.log('before async');
async function get_data() {
	let x = 3;
	console.log(x);
	// await fetch('./fetch.js')
	// 	.then((data) => data)
	// 	.then((response) => response.text())
	// 	.then((result) => console.log(result))
	// 	.then((data) => console.log(data))
	// 	.then(console.log(1))
	// 	.then(console.log(2))
	// 	.then(console.log(3))
	// 	.then(console.log(4));
	// console.log('hello');
	const request = await fetch('./fetch.js');
	console.log(request);
	const val = await request.text();
	console.log(val);
	console.log('val');
}

get_data();

console.log('after async');
