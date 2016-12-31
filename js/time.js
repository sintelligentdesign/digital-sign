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
        meridian = "AM"
    } else {
        meridian = "PM"
    }

    document.getElementById("time").innerHTML = hoursString + ":" + (minutes < 10 ? "0" : "") + minutes + "<span class='meridian'>" + meridian + "</span>"
}

/// Date
function updateDate() {
    var d = new Date()
    var date = d.getDate()
    var month = d.getMonth()
    var day = d.getDay()

    var weekdayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    document.getElementById("date").innerHTML = weekdayString[day] + ", " + monthString[month] + " " + date
}