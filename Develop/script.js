// Gets the current month, day and year in the user's timezone 
// Displays the day at the top of the page 
var currentDay = moment().format("MMMM Do, YYYY");
var displayCurrentDate = document.getElementById("currentDay");
displayCurrentDate.textContent = currentDay;

// Gets the current hour in the user's time zone 
var currentHour = moment().format("HH"); 
// For each row, do the following: 
//grabs hour from each time slot and compares it to actual time
$(".time-row").each(function () {
    // stores the time slot of the row into a variable 
    var timeSlot = $(this).attr("id").split("-")[1];
    // check whether the time slot hour is equal to the current hour 
    if (currentHour == timeSlot) {
        // add "present" class - displays the row as red in colour 
        $(this).addClass("present");
    } 
    // check whether the current hour is less than the time slot hour 
    else if (currentHour < timeSlot) {
        // remove the "present" class - so that the row doesn't appear red 
        $(this).removeClass("present");
        // add the "future" class - displays the row in green colour 
        $(this).addClass("future");
    } 
    // check whether the current hour is greater than the time slot hour 
    else if (currentHour > timeSlot) {
        // remove the "future" class - so that the row does not appear green 
        $(this).removeClass("future");
        // add the "past" class - so that the row appears grey in colour 
        $(this).addClass("past");
    }
});

// Using jQuery, checks whether the saved button (saveBtn) is clicked for that row 
// and does the following: 
$(".saveBtn").click(function (event) {
    // preventing default state so that when the user clicks save and refreshes the page, 
    // the data inserted into the row still remains 
    event.preventDefault();
    // saves the data associated with each time row into local storage 
    var rowData = $(this).siblings(".time-block").val();
    var rowTime = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(rowTime, rowData);
});

// stores data for each hour row into local storage
var storedData_9 = localStorage.getItem("09"); 
var storedData_10 = localStorage.getItem("10");  
var storedData_11 = localStorage.getItem("11"); 
var storedData_12 = localStorage.getItem("12"); 
var storedData_13 = localStorage.getItem("13"); 
var storedData_14 = localStorage.getItem("14");  
var storedData_15 = localStorage.getItem("15"); 
var storedData_16 = localStorage.getItem("16"); 
var storedData_17 = localStorage.getItem("17"); 

// Using jQuery, the locally stored data for each row is displayed in its
// corresponding row on the webpage 
$("#row-09 .time-block").val(storedData_9);
$("#row-10 .time-block").val(storedData_10);
$("#row-11 .time-block").val(storedData_11);
$("#row-12 .time-block").val(storedData_12);
$("#row-13 .time-block").val(storedData_13);
$("#row-14 .time-block").val(storedData_14);
$("#row-15 .time-block").val(storedData_15);
$("#row-16 .time-block").val(storedData_16);
$("#row-17 .time-block").val(storedData_17);
