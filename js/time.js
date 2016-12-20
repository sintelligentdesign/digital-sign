/// Clock
function updateClock() {
    var d = new Date();
    var hours = d.getHours()
    var minutes = d.getMinutes()
    
    minutesString = (minutes < 10 ? "0" : "") + minutes

    hoursString = (hours > 12) ? hours - 12: hours
    hoursString = (hours == 0) ? 12 : hours

    var meridian = (hoursString < 12) ? "am" : "pm"

    var timeString = hoursString + ":" + minutesString + " " + meridian

    document.getElementById("time").innerHTML = timeString
}

/// Date
function updateDate() {
    var d = new Date();
    var date = d.getDate()
    var month = d.getMonth()
    var day = d.getDay()

    var weekdayString = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    var monthString = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

    document.getElementById("date").innerHTML = weekdayString[day] + " " + monthString[month] + " " + date
}

/// Greeting
function updateGreeting() {
    var d = new Date();
    var hours = d.getHours()

    if (hours < 12) {
        document.getElementById("greeting").innerHTML = "good morning"
    }
    if (hours > 12) {
        if (hours < 17) {
            document.getElementById("greeting").innerHTML = "good afternoon"
        }
        else {
            document.getElementById("greeting").innerHTML = "good evening"
        }
    }
}