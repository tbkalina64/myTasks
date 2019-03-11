////1 Написать ф-цию, которая принимает ф-цию и аргументы и возвращает результат.
//например:
//* applyAll(sum, 1, 2, 3) // => 6
//* apllyAll(mul, 1, 2, 3, 4) // => 24

function sum (rest){
	return rest.reduce((accumulator, currentValue) => accumulator + currentValue);
}
function min (rest){
	return rest.reduce((accumulator, currentValue) => accumulator - currentValue);
}
function mul (rest){
	return rest.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function applyAll(func, ...rest){
	return func(rest);
}
console.log(applyAll(sum, 10, 56, 89));
console.log(applyAll(min, 10, 56, 89));
console.log(applyAll(mul, 10, 56, 89));

//2 Напишите ф-цию fibonacci (), которая возвращает N-й номер Фибоначчи. 
//например:
//fibonacci (0)  // =>0
//fibonacci (1) // =>1
//fibonacci (3)  // =>2
//fibonacci (6)   // =>8


// let sq5 = Math.sqrt(5);
// let numBineOne = (1 + sq5) / 2;
// let numBineTwo = (1 - sq5) / 2;
// let numFibonacci;
// let n = +prompt('Enter your number fibonacci');

// //////////////////////////////1///////////////////////

// function fibonacci() {
    
//         return numFibonacci = (Math.pow(numBineOne, n) - Math.pow(numBineTwo, n)) / sq5;
// }
//  fibonacci(n);
// console.log(numFibonacci);
 
//////////////////////////////2///////////////////////
//function fibonacci(n) {
//  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
//}
//console.log(fibonacci(n));
