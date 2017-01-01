function updateNews() {
    $.get("http://feeds.bbci.co.uk/news/rss.xml?edition=us", function (data) {
        var storiesLong = []

        $(data).find("item").each(function() {
            var story=$(this)
            storiesLong.push(story.find("title").text())
        })

        var storiesShort = []
        var i = 0
        while (i < 5) {
            storiesShort.push(storiesLong[i] + '\n')
            i++
        }

        document.getElementById("news-ticker").innerText = storiesShort.toString().replace(/,/g, "")
    })
}