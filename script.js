$(function(){
 var giphy = {};
 var randomGif = "";

//generates random gif and stores it in a new object
 $("button").on("click", function(){
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
    type: 'GET'
  }).done(function(response){
    console.log(response);
    giphy = response;
    console.log(giphy.data.image_url);
    var randomGif = giphy.data.image_url;
    console.log(randomGif);
    getRandomGif(randomGif);
  });
  });
  function getRandomGif(gif){
  $("body").append("<img src=\"" + gif + "\"/>");

}


});
