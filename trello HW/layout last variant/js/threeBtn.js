/*    show buttons       */
let threeBtns = document.getElementById('threeBtns');
let buttons = document.getElementById('buttons');

threeBtns.onclick = function displaySlider() {

    if (buttons.style.display == "none") {
        buttons.style.display = "block";
        firstImg.style.display = "none";


    } else {

        buttons.style.display = "none";
        firstImg.style.display = "block";
    }
    tableCreate.style.display = "none";
    sliderWraper.style.display = "none";
}


let myButtonOne = document.getElementById("my_btn_one");

myButtonOne.addEventListener("click", function () {
    if (this.style.background == '')
        this.style.background = 'red';
    this.style.background = (this.style.background == 'red') 
        ? 'green' : 'red';
});


let myButtonTwo = document.getElementById("my_btn_two");

myButtonTwo.addEventListener("click", function () {
    if (this.style.background == '')
        this.style.background = 'pink';
    this.style.background = (this.style.background == 'pink') 
        ? 'green' : 'pink';
});

let myButtonThree = document.getElementById("my_btn_three");

myButtonThree.addEventListener("click", function () {
    if (this.style.background == '')
        this.style.background = 'blue';
    this.style.background = (this.style.background == 'blue')
        ? 'green' : 'blue';
});
