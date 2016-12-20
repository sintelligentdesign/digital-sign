/// Date/time setup
var d = new Date();

var date = d.getDate()
var day = d.getDay()
var hours = d.getHours()
var minutes = d.getMinutes()

/// Greeting
if (hours < 12) {
    document.getElementById("greeting").innerHTML = "good morning"
}
if (hours > 12) {
    document.getElementById("greeting").innerHTML = "good afternoon"
}

/// Clock
function updateClock() {
    // Format hours and minutes
    minutes = (minutes < 10 ? "0" : "") + minutes

    hours = (hours > 12) ? hours - 12: hours
    hours = (hours == 0) ? 12 : hours

    var meridian = (hours < 12) ? "AM" : "PM"

    var timeString = hours + ":" + minutes + " " + meridian

    // TODO: change to set innerHTML
    document.getElementById("time").innerHTML = timeString
}