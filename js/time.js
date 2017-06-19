/// Clock
function updateClock() {
    var d = new Date()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    console.log(minutes)

    if (hours == 0) {
        var hoursString = 12
    }
    if (hours > 12) {
        var hoursString = hours - 12
    }  
    else if (hours != 0 && hours <= 12){
        var hoursString = hours
    }

    if (hours < 12) {
        var meridian = "AM"
    } else {
        var meridian = "PM"
    }

    document.getElementById("time").innerHTML = hoursString + ":" + (minutes < 10 ? "0" : "") + minutes + "<span class='meridian'>" + meridian + "</span>"
}

/// Date
function updateDate() {
    var d = new Date()
    var date = d.getDate()
    var month = d.getMonth()
    var day = d.getDay()
    console.log(day)

    var weekdayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    document.getElementById("date").innerHTML = weekdayString[day] + ", " + monthString[month] + " " + date
}