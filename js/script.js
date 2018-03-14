/* global $*/
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  $.ajax({
  url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&limit=1",
  method: "GET",
  success: function(response) {
        
        var img_url=response.data[0].images.original.url;
        
        $('body').append('<img src=' + img_url + '>');
        
  },
});
  
  
  
});
// This Gonna Help
// Below log the response object to the console
        // console.log(response);
        //Log the data array to the console
        // console.log(response.data);
        //Log the first gif object from the data array
        // console.log(response.data[0]);
        //Log the images array to the console
        // console.log(response.data[0].images);
        //Log the orignal image to the console
        // console.log(response.data[0].images.fixed_height_still.url);
        //Log the url from the orignial gif to the console  
        // console.log(response.data[0].images.original.url);