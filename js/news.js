function updateNews() {
    document.getElementById("news-items").innerText = ''
    $('#news-items').rss("http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml", {
        // Number of entries
        limit: 4,

        // Display effect
        effect: 'slideFastSynced',

        // Template for layout
        layoutTemplate: "{entries}",

        // Template for entries
        entryTemplate: "<div>{title}</div>"
    })
}