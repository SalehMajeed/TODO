/*
    Proxy use to intercept and redifne operations of a object.
    it has->
        Proxy Object
        handler -> use get and set for handler
        target Object
*/
const target = {
	message1: 'hello',
	message2: 'hi',
};

const handler = {
	set: function (target, prop, value) {
		if (prop in target) {
			target[prop] = value;
		} else {
			console.log('can not possible');
		}
	},
	get: function (target, prop, receiver) {
		// console.log(target);
		// console.log(prop);
		// console.log(receiver);
		return prop in target ? target[prop] : 'try next time';
	},
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1, proxy.message2, proxy.message3);

proxy.message3 = 2;
