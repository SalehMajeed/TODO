/**
 * Object.define property use to set property on an object by declaring some rules on the property.
 * Where Object.define Properties use to set multiple properties on an object with some rules.
 */

// 'use strict';

let obj = {
	one: 1,
	two: 2,
};

console.log(obj);

Object.defineProperty(obj, 'three', {
	value: 3,
	writable: false,
	enumerable: false,
	configurable: false,
	// set()
	// get()
});

Object.defineProperties(obj, {
	four: {
		value: 4,
	},
	five: {
		value: 5,
	},
});

obj.four = 5;

console.log(obj);
