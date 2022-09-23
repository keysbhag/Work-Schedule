let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

let time9am = $('#9am');
let time10am = $('#10am'); 
let time11am = $('#11am'); 
let time12pm = $('#12pm'); 
let time1pm = $('#1pm'); 
let time2pm = $('#2pm'); 
let time3pm = $('#3pm'); 
let time4pm = $('#4pm'); 
let time5pm = $('#5pm');

let btn9am = $('#9am-btn');
let btn10am = $('#10am-btn');
let btn11am = $('#11am-btn');
let btn12pm = $('#12pm-btn');
let btn1pm = $('#1pm-btn');
let btn2pm = $('#2pm-btn');
let btn3pm = $('#3pm-btn');
let btn4pm = $('#4pm-btn');
let btn5pm = $('#5pm-btn');

btn9am.on('click',function (event) {
    event.preventDefault();

    let addEvent = time9am.val();

    console.log(addEvent);

    if (!addEvent) {
        console.log('No shopping item filled out in form!');
        return;
    }

})