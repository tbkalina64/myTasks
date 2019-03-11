'use strict';
// 1.
//let number1 = '897895';
//let number2 = '11215463';
//let number1 = prompt('Enter first number');
//let number2 = prompt('Enter second number');
//
//function getSum(num1, num2) {
//    let numArray1 = num1.split('');
//    let numArray2 = num2.split('');
//    let resultArray = [];
//    let i;
//    let balanced = 0;
//    let b;
//
//    let resultArrayLenght = numArray1.length > numArray2.length
//       ? numArray1.length + 1 
//       : numArray2.length + 1;
//
//    for (i = 1; i <= resultArrayLenght; i++) {
//        let sum = 0;
//        let a = +numArray1[numArray1.length - i] || 0;
//        let b = +numArray2[numArray2.length - i] || 0;
//        sum = a + b + balanced;
//
//        if (sum > 9) {
//            resultArray[resultArrayLenght - i] = sum - 10;
//            balanced = 1;
//        } else {
//            resultArray[resultArrayLenght - i] = sum;
//            balanced = 0;
//        }
//    }
//    return resultArray.join('');
//}
//
//console.log(getSum(number1, number2));
//
////2. valid or invalid password
//
//let enterPass = prompt('enter your password');
//let arrayStr = [];
//let code;
//let codeNumber = false;
//let codeSimbol = false;
//
//console.log(enterPass.length);
//arrayStr = enterPass.split('');
//
//(5 < enterPass.length && enterPass.length < 21) 
//  ? alert('length password is right')
//  : alert('length password is wrong');
//
//for (let i = 0; i < enterPass.length; i++) {
//
//    code = enterPass.charCodeAt(i);
//    //    console.log(code);
//
//    if ((47 < code && code < 58) || (96 < code && code < 123) || (64 < code && code < 91)) {
//        //        console.log(code);
//        console.log('simbol is right');
//    } else {
//        //        console.log(code);
//        console.log('simbol is wrong');
//    }
//    if (47 < code && code < 58) {
//        codeNumber = true;
//    }
//    if ((96 < code && code < 123) || (64 < code && code < 91)) {
//        codeSimbol = true;
//    }
//}
//if (codeSimbol && codeNumber) {
//    console.log(code);
//    console.log('passworld valid');
//} else {
//    console.log(code);
//    console.log('passworld invalid');
//}


// 3. checkNumber
let checkNumber = +prompt('enter your number');

function check() {
    let arr = [];
    let result = [];
    let fesult1 = [];
    
    if (checkNumber === 2){
        result([true, true, false]);
        return result;
    }
    if (checkNumber === 0){
        result([false, true, true]);
        return result;
    }
    if (checkNumber % 10 == 0) {
        result([false, true, true]);
       return result;
    }
    if (checkNumber % 2 == 0) {
        result([false, true, false]);
        return result;
    }
     if ((checkNumber > 1) && (checkNumber % checkNumber == 0) && (checkNumber % 1 == 0)) {
        result([true, false, false]);
        return result;
    } else 
         console.log([false, false, false]);
    
}
check(checkNumber);