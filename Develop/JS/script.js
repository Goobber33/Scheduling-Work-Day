// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage.

    $(".saveBtn").click(function (event) {
        var parent = $(this).parent().attr("id");
        var setHour = parseInt(parent.slice[5]);
        var currentDay = dayjs().format('YYYY-MM-DD ' + setHour);
        var currentHour = dayjs(currentDay);
        var today = dayjs().format('YYY-MM-DD H');
        var pastTime = currentHour.diff(today, 'hour');
        var work = document.querySelector('#' + parent + ' textarea').value;
        localStorage.setItem(parent, work);
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 

    $('.time-block').each(function () {
        var parent = $(this).attr("id");
        var setHour = parseInt(parent.slice[5]);
        var currentDay = dayjs().format('YYYY-MM-DD ' + setHour);
        var currentHour = dayjs(currentDay);
        var today = dayjs().format('YYYY-MM-DD H');
        var pastTime = currentHour.diff(today, 'hour');
        console.log(pastTime);
        if (pastTime === 0) {
            $(this).addClass('present');
        }
        if (difference > 0) {
            $(this).addClass('future')
        }
        if (difference < 0) {
            $(this).addClass('past');
        }
    });


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    $('time-block').each(function () {
        var parent = $(this).attr("id");
        var setHour = parseInt(parent.slice[5]);
        var currentDay = dayjs().format('YYYY-MM-DD ' + setHour);
    });

    // TODO: Add code to display the current date in the header of the page.
});



var todaysDate = dayjs().format('dddd,MMMM D') + 'th';
$('#currentDay').text(todaysDate); //show current day on page top