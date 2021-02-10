const infiniteCurry = (fn, seed) => {
    const reduceValue = (args, seedValue) =>
        args.reduce((acc, a) => {
            return fn.call(fn, acc, a);
        }, seedValue);
    const next = (...args) => {
        return (...x) => {
            if (!x.length) {
                return reduceValue(args, seed);
            }
            return next(...args, reduceValue(x, seed));
        };
    };
    return next();
};
const iSum = infiniteCurry((x, y) => x + y, 0);
const iMul = infiniteCurry((x, y) => x * y, 1);
console.log(iSum(1, 6, 5, 4, 6)(3, 4)(5, 6)(7, 8, 9)(3)()); // 43
console.log(iMul(1)(3, 4)(5, 6)()); // 360


// const curry = function first_value(x) {
// 	let val = [];
// 	let total = 0;
// 	return function get_value(...y) {
// 		if (y.length == 0) {
// 			total = x(val);
// 			val = [];
// 			return total;
// 		} else {
// 			val.push(...y);
// 			return get_value;
// 		}
// 	};
// };
// // x ->addition
// let add = curry(a => a.reduce((acc, val) => (acc += val), 0));
// console.log(add(1, 2)(1,2)(3)()); // 6
// // console.log(add(1)(2)(5)()); // 8
// // console.log(add(1)(2)(5)(1)()); // 9
// // console.log(add(1)()); // 1
