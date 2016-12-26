/// Clock
function updateClock() {
    var d = new Date()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    
    var hoursString = new String
    var minutesString = new String
    var meridian = new String

    if (hours > 11) {
        hoursString = hours - 12
    } else if (hours = 0) {
        hoursString = 12
    } else {
        hoursString = hours
    }

    if (hours < 12) {
        meridian = "am"
    } else {
        meridian = "pm"
    }

    document.getElementById("time").innerHTML = hoursString + ":" + (minutes < 10 ? "0" : "") + minutes + " " + meridian
}

/// Date
function updateDate() {
    var d = new Date()
    var date = d.getDate()
    var month = d.getMonth()
    var day = d.getDay()

    var weekdayString = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    var monthString = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

    document.getElementById("date").innerHTML = weekdayString[day] + " " + monthString[month] + " " + date
}