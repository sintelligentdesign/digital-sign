/// Date/time setup
var d = new Date();

var date = d.getDate()
var month = d.getMonth()
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
    minutes = (minutes < 10 ? "0" : "") + minutes

    hours = (hours > 12) ? hours - 12: hours
    hours = (hours == 0) ? 12 : hours

    var meridian = (hours < 12) ? "am" : "pm"

    var timeString = hours + ":" + minutes + " " + meridian

    document.getElementById("time").innerHTML = timeString
}

/// Date
function updateDate() {
    var weekdayString = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    var monthString = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

    document.getElementById("date").innerHTML = weekdayString[day] + " " + monthString[month] + " " + date
}

function main() {
    updateClock()
    updateDate()
    setInterval(updateClock, 1000)
    setInterval(updateDate, 1000)
}