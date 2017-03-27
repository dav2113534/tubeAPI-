var youtubeUrl = "https://www.googleapis.com/youtube/v3/search";

//AIzaSyCxu-HaWg7nUN9KkUD3ozKgOQdZHU3Pyy0 API Key

function getDataFromApi(query, callback) {
    var getJson = {
        part: "snippet",
        key: "AIzaSyCxu-HaWg7nUN9KkUD3ozKgOQdZHU3Pyy0",
        q: ""
    }
    $.getJSON(youtubeUrl, getJson, callback)
}

function displayData(data) {
    var result = '';
    if (data.items) {
        data.items.forEach(function (item) {
            result += '<p>' + item.snippet.title + '</p>';
        });
    } else {
        result += '<p>No results</p>';
    }
    $('.js-search-results').html(result);
}

function watchSubmit() {
    $('.js-search-form').submit(function (e) {
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        getDataFromApi(query, displayData);
    });
}

$(function () {
    watchSubmit();
});