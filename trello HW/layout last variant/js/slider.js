/*    show slider       */
let hwSlider = document.getElementById('HWSlider');
let sliderWraper = document.getElementById('sliderWraper');

hwSlider.onclick = function displaySlider() {

    if (sliderWraper.style.display == "none") {
        sliderWraper.style.display = "block";
        firstImg.style.display = "none";

    } else {

        sliderWraper.style.display = "none";
        firstImg.style.display = "block";
    }
    buttons.style.display = "none";
    tableCreate.style.display = "none";
}

/*    create slider     */

let images = [];
//let timeSlider = 3000;
let current = 0;

images[0] = "img/someImg1.jpg";
images[1] = "img/someImg2.jpg";
images[2] = "img/someImg3.jpg";

// change img
changeImg();

function changeImg() {
    document.getElementById('slideItem').src = images[current];

    if (current < images.length - 1) {
        current ++;
    } else {
        current = 0;
    }
}
changeImg();
setInterval(changeImg, 3000);

/*  arrows slider  */

document.getElementById("next").onclick = function () {
    if (current -1 == -1) {
        current = images.length - 1;
    } else {
        current--;
    }
    changeImg();
}

document.getElementById("prev").onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    changeImg();
}
