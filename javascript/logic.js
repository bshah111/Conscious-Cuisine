
//Napster API call

// var APIKey = "MTE1MGMyZGYtN2JhNy00MjVhLTkwOTMtYTQyZTYwODA0OTk3";
//var queryURL = ('https://api.napster.com/v2.0/playlists/' + id + '/tracks?apikey=' + APIKey + '&limit=50');


// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(queryURL);
//     console.log(response);

//     var results = response.data;

//   });

// $(document).ready(function() {


// const playlistTemplateSource = document.getElementById('playlist-template').innerHTML;
// const playlistTemplate = Handlebars.compile(playlistTemplateSource);

// const tracksTemplateSource = document.getElementById('tracks-template').innerHTML;
// const tracksTemplate = Handlebars.compile(tracksTemplateSource);

// const $playlist = $('#playlist-container');
// const $tracks = $('#tracks-container');
// const $mainTitle = $('.header');
// const $backButton = $('.back-button');

// const getTopPlaylists = $.get('https://api.napster.com/v2.0/playlists?apikey=' + APIKey);

// console.log(getTopPlaylists);


// function getPlaylistTracks(id) { //grabbing playlist id, from the click event of the image of playlist
//   return $.get('https://api.napster.com/v2.0/playlists/' + id + '/tracks?apikey=' + APIKey + '&limit=50');
// }

// $backButton.click(() => {
// 	$playlist.show();
//   $tracks.hide();
//   $mainTitle.text('Top Playlists');
//   $backButton.hide();
// });

// $backButton.hide(); // Initially hide back button.

// function changeToTracks(playlistName) {
// 	$mainTitle.text(playlistName);
//   $playlist.hide();
// 	$tracks.show();
//   $backButton.show();
  
//   return renderTracks;
// }

// function renderTracks(response) {
//   $tracks.html(tracksTemplate(response));
// }

// getTopPlaylists //get a list of the playlists
//   .then((response) => {
//     $playlist.html(playlistTemplate(response));
//     addPlaylistListener();
//   });

// function addPlaylistListener() {
//   $('.cover').on('click', (e) => {
//     const $playlist = $(e.target);
//     getPlaylistTracks($playlist.data('playlistId')) //picture id is tagged and will pull the tracks from the cover image clicked
//       .then(changeToTracks($playlist.data('playlistName')));
//   });
// }

// });



// yummily recipe code




 



function recipeSearch() {
    
    var ingredient = $("#recipeSearch").val().trim();
    var ingrNoSpace = ingredient.replace(/ /g, "+")
    var queryURL = "https://api.yummly.com/v1/api/recipes?_app_id=1bdad67c&_app_key=d635ffbe690df5a2a7005bdce55a1164&q=" + ingrNoSpace + "&requirePictures=true"
    var params = [];
    var refinedQuery = queryURL + params;

    console.log(refinedQuery);

    //append allergy and course search parameters to end of url
$('#accordion').on('change', ':checkbox', function () {
    if ($(this).is(':checked')) {
        // params.append("&allowedCourse[]", "course^course-" + $(this).val())
            console.log($(this).val() + ' is now checked');
            // console.log(params);

        params.push("&allowedCourse[]course^course-" + $(this).val());
        console.log(params);
        

    } else {

        params.splice(($(this).val()))
        console.log(params);
        
    }
    
});

    
    // $.ajax({
    //     url: refinedQuery,
    //     method: "GET"
    // }).then(function(response) {
    
    //     // var results = response.data
    //     console.log(response)
    // })
}

$("button").on("click", function(event) {
    event.preventDefault();

    recipeSearch();
})

