function updateNews() {
    document.getElementById("news-items").innerText = ''
    $('#news-items').rss("https://daringfireball.net/feeds/main")
}