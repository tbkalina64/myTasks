//document.getElementsById('mobMenu').addEventListener("click", openMenu)
//    function openMenu() {
//    alert('this.value');
//};


/*  calck and show date  */


let newData = new Date();
let year = newData.getUTCFullYear();
let month = newData.getUTCMonth();
let date = newData.getUTCDate();
let weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let nowDay;

/*  calck and show date  */

function getWeekDay(dates) {
    return nowDay = weekdays[newData.getUTCDay()];
}

var dates = (`${date}.${++month}.${year} ${nowDay}`);
console.log(getWeekDay(dates));

function showDate() {
    var dateShow = document.getElementById('date');
    dateShow.innerHTML = (`${date}.${month}.${year} ${nowDay}`);
}
showDate();

/*  calck and show time  */

function showTime() {

    var timeShow = document.getElementById('time');

    let hours = newData.getHours();
    if (hours < 10) hours = '0' + hours;
    time.children[0].innerHTML = hours;

    let minutes = newData.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    time.children[1].innerHTML = minutes;

    let seconds = newData.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    time.children[2].innerHTML = seconds;

//    console.log(`${hours}:${minutes}:${seconds}`);
}
showTime();

setInterval(showTime, 1000);

/*        size of window brauser         */

var h = window.screen.availHeight;
var w = window.screen.availWidth;

function showSizeWindow() {

    return resultSize = h * w;

};

console.log(showSizeWindow());
document.getElementById('sizeWindow').innerHTML = resultSize;


/*                inputs           */

function createTable() {
    let rowNumber = document.getElementById("rows").value;
    let colNumber = document.getElementById("cols").value;

    for (var row = 0; row < parseInt(rowNumber, 10); row++) {

        var x = document.getElementById('myTable').insertRow(row);

        for (var col = 0; col < parseInt(colNumber, 10); col++) {

            var y = x.insertCell(col);
            //  y.innerHTML = "Row-" + row + " Col-" + col;
            myTable.onmouseover = function (event) {
                y.innerHTML = "Row-" + row + " Col-" + col;
            };

            myTable.onmouseout = function (event) {
                y.innerHTML = '';
            };
        }
    }

}

/*     show table   */

let hwTable = document.getElementById('HWTable');
let tableCreate = document.getElementById('tabCreate');
let firstImg = document.getElementById('firstContent');


hwTable.onclick = function displayTable() {

    if (tableCreate.style.display == "none") {
        tableCreate.style.display = "block";
        firstImg.style.display = "none";

    } else {

        tableCreate.style.display = "none";
        firstImg.style.display = "block";
    }
    buttons.style.display = "none";
    sliderWraper.style.display = "none";
}



/*            cache             */
