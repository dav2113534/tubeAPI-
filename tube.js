var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';

//AIzaSyCxu-HaWg7nUN9KkUD3ozKgOQdZHU3Pyy0 API Key

function getDataFromApi() {
    var getJson = {
        part: "snippet",
        key: "AIzaSyCxu-HaWg7nUN9KkUD3ozKgOQdZHU3Pyy0"
    }
    $.getJson(youtubeUrl, getJson)
}