// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage.

    // This is the save button function. When the user clicks save, 
    // it stores the data in local storage and will display that content until erased.

    $(".saveBtn").click(function (event) {
        var parent = $(this).parent().attr("id");
        var setHour = parseInt(parent.slice(5));
        var currentDay = dayjs().format('YYYY-MM-DD ' + setHour);
        var currentHour = dayjs(currentDay);
        var today = dayjs().format('YYYY-MM-DD H');
        var pastTime = currentHour.diff(today, 'hour');
        var work = document.querySelector('#' + parent + ' textarea').value;
        localStorage.setItem(parent, work);
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 

    // This function changes the colors based on local time. Gray is in the past,
    // Red is present time, and green is future time.

    $('.time-block').each(function () {
        var parent = $(this).attr("id");
        var setHour = parseInt(parent.slice(5));
        var currentDay = dayjs().format('YYYY-MM-DD ' + setHour);
        var currentHour = dayjs(currentDay);
        var today = dayjs().format('YYYY-MM-DD H');
        var pastTime = currentHour.diff(today, 'hour');
        console.log(pastTime);
        if (pastTime === 0) {
            $(this).addClass('present');
        }
        if (pastTime > 0) {
            $(this).addClass('future')
        }
        if (pastTime < 0) {
            $(this).addClass('past');
        }
    });


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // This function takes the stored local data, and pastes it to the time block section it was types in.

    $('.time-block').each(function () {
        var parent = $(this).attr("id");
        var setHour = parseInt(parent.slice(5));
        var currentDay = dayjs().format('YYYY-MM-DD ' + setHour);
        var currentHour = dayjs(currentDay);
        var today = dayjs().format('YYYY-MM-DD H');
        var pastTime = currentHour.diff(today, 'hour');
        var work = localStorage.getItem(parent);
        if (work != null) {
            document.querySelector('#' + parent + ' textarea').value = work;
        }
    });

    // TODO: Add code to display the current date in the header of the page.

    // This variable takes the local time and presents it on the top of the page using day.js

    var todaysDate = dayjs().format('dddd,MMMM D') + 'th';
    $('#currentDay').text(todaysDate); //show current day on page top
    
}); 