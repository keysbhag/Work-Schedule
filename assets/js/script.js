let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);


setInterval(changeSchedule, 1000);

function changeSchedule() {
    for (let i = 9; i < 18; i++) {    
        if (moment().format("HH") == i) {
            $("#"+(i-9).toString()+"a").removeClass('future').addClass('present');
        } 
        else if (moment().format("HH") > i) {
            $("#"+(i-9).toString()+"a").removeClass('present').addClass('past');
        }
        else if (moment().format("HH") < i ) {
            $("#"+(i-9).toString()+"a").removeClass('past').addClass('future');

        }    
    }

}


// Everything below handles saving events in the scheduler
let saveBtn = $('.save-btn');

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

init();

changeSchedule();