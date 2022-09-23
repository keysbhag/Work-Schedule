// Sets a variable as the current date by: Day of the week/Month/Day/Year 
let currentDate = moment().format("dddd, MMMM Do YYYY");
// Updates the subheader tag to include this value
$("#currentDay").text(currentDate);

// Sets the interval of the changeSchedule function to be called every second
setInterval(changeSchedule, 1000);
// Function that determines the background color of each time block depending on the current hour of the day:
// If red it is the current hour, if past it is neutral, and future hours are green
function changeSchedule() {
    for (let i = 9; i < 18; i++) {    
        if (moment().format("HH") == i) { // Takes the moment in time and compares it to the span of hours it could be in this case when it hits the hour it 
            //currently is it will turn it red and get rid of the future class tag
            $("#"+(i-9).toString()+"a").removeClass('future').addClass('present');
        } 
        else if (moment().format("HH") > i) { // Same concept as the above statement but checks if the hour block is passed
            $("#"+(i-9).toString()+"a").removeClass('present').addClass('past');
        }
        else if (moment().format("HH") < i ) { // Same concept as the above statement but checks if the hour block is still ahead
            $("#"+(i-9).toString()+"a").removeClass('past').addClass('future');

        }    
    }
    // Function resets all scheduled events for the user at 11:59:59 PM by setting them to empty strings
    if (moment().format("HH:mm") == "23:59:59") {
        for (let i = 0; i < 9; i++) {     
            localStorage.setItem('event'+i.toString(), JSON.stringify(' '));
        }
    }
}

// Everything below handles saving events in the scheduler

// Takes all save buttons into a variable
let saveBtn = $('.save-btn');

// If any save button is clicked it, whatever text content is within it's respective text box will be saved in local storage
saveBtn.on('click',function (event) {
    let targetSaveBtn = event.target.id; // Saves the id of the button clicked
    
    for (let i = 0; i < 9; i++) { // Loops through the number of time blocks
        event.preventDefault(); 

        if (targetSaveBtn == i) {  // compares the id# of the time block to the position that they should be in so that the target number and the position match.
            // This also for manipulation to make a separate JSON object for each time block and allows for easier accessibility and alteration
            let addEvent = $("#"+i.toString()+"a"); // If the number match we use jQuery selector manipulation to access that specific time block
            
            localStorage.setItem('event'+i.toString(), JSON.stringify(addEvent.val())); // Puts that value into local storage 
        }
    }    
})

// This initializes the data in the local storage by converting it back into a JavaScript object 
function init () {
    for (let j = 0; j < 9; j++) { // The for loop runs the length of the number of time blocks and puts back the string that was saved in the respective block
        let storedVal = JSON.parse(localStorage.getItem('event'+j.toString()));

        $("#"+j.toString()+"a").text(storedVal); // Depending on the event number called is what will be stored back in the text
    }
}
init(); // Init called every time the page is re opened

changeSchedule(); // Runs the changeSchedule function right away so we don't have to wait a second to load the content of the page
