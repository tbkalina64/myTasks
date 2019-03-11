//Переписать предыдущую работу с использованием объектов и ф - ций.
//Реализовать логику:
//    1. человек вводит пароль
//    2. если он валиден, тогда ему предлагают ввести число(третье задание из предыдущей работы),
//    3. Если оно соответствует хотябы одному из условий, то тогда он может ввести 2 числа для получения результата сложения


let enterPass = prompt('enter your password');
let arrayStr = [];
let code;
let codeNumber = false;
let codeSimbol = false;
let sum;


console.log(enterPass.length);
arrayStr = enterPass.split('');

(5 < enterPass.length && enterPass.length < 21) ?
alert('length password is right'): alert('length password is wrong')


for (let i = 0; i < enterPass.length; i++) {

    code = enterPass.charCodeAt(i);
    //    console.log(code);
    function simbolRight() {

        if ((47 < code && code < 58) || (96 < code && code < 123) || (64 < code && code < 91)) {
            //        console.log(code);
            console.log('simbol is right');

        } else {
            //        console.log(code);
            console.log('simbol is wrong');
        }
    }
    simbolRight();

    if (47 < code && code < 58) {
        codeNumber = true;
    }

    if ((96 < code && code < 123) || (64 < code && code < 91)) {
        codeSimbol = true;
    }
}

function passValid() {
    if (codeSimbol && codeNumber) {
        //        console.log(code);
        console.log('passworld valid');

        let checkNumber = +prompt('enter your number');
        let isPrime = false;
        let isEven = false;
        let isDividenTen = false;
        let sumArray;
        let arr = [];
        

        function check() {

            if ((checkNumber > 1) && (checkNumber % checkNumber == 0) && (checkNumber % 1 == 0) && (checkNumber % 2 != 0) && (checkNumber != 2)) {

                isPrime = true;
                console.log(isPrime);

            }

            if ((checkNumber % 10 == 0) && (checkNumber != 0)) {

                isDividenTen = true;
                console.log(isDividenTen);
                isEven = true;
                console.log(isEven);
            }

            if (checkNumber === 2) {
                isEven = true;
                console.log(isEven);
            }
            else {
                 checkNumber == false;   
            }
        }
        check();

        if (isPrime == true || isDividenTen == true || isEven == true) {
            function sumNumber() {
                var a = +prompt('enter first number');
                var b = +prompt('enter second number');
                sum = a + b;
                console.log(sum);   
            }
        sumNumber();
        }
        

    } else {
        console.log(code);
        console.log('passworld invalid');

    }
}
passValid();
