let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);


setInterval(changeSchedule, 1000);

function changeSchedule() {
    
}







// Everything below handles saving events in the scheduler
let saveBtn = $('.save-btn');

init();

function init () {

    for (let j = 0; j < 9; j++) {
        let storedVal = JSON.parse(localStorage.getItem('event'+j.toString()));

        $("#"+j.toString()+"a").text(storedVal);
    }
}

saveBtn.on('click',function (event) {
    let targetSaveBtn = event.target.id;

    for (let i = 0; i < 9; i++) {
        event.preventDefault();
        
        if (targetSaveBtn == i) {             
            let addEvent = $("#"+i.toString()+"a");

            localStorage.setItem('event'+i.toString(), JSON.stringify(addEvent.val()));
        }
    }
})