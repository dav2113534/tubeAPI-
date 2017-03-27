var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';

//AIzaSyCxu-HaWg7nUN9KkUD3ozKgOQdZHU3Pyy0 API Key

function getDataFromApi() {
    var getJson = {
        part: "snippet",
        key: "AIzaSyCxu-HaWg7nUN9KkUD3ozKgOQdZHU3Pyy0",
        q: "Dave chappelle"
    }
    $.getJson(youtubeUrl, getJson)
}

function displayData(data) {
    var result = '';
    if (data.Search) {
        data.Search.forEach(function (item) {
            result += '<p>' + item.Title + '</p>';
        });
    } else {
        result += '<p>No results</p>';
    }
    $('.query').html(result);
}

function watchSubmit() {
    $('.js-search-form').submit(function (e) {
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        getDataFromApi(getJson, displayData);
    });
}

$(function () {
    watchSubmit();
});