/* global $*/
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// $(document).ready(function() {
//     var userInput = $("input").val();
//     $.ajax({
//         url: "https://api.giphy.com/v1/stickers/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC",
//         method: "GET",
//         success: function(response) {
//             var img_url = response.data[0].images.fixed_width_downsampled.url;
//             $('button').click(function(){
//             $('body').append('<img src=' + response.data[0].images.fixed_width_downsampled.url + '>');            });
//         },
//     });
// });



$(document).ready(function(){
    
  $('#delete').click(function(){
      $('.text-center').html(" ");
      $('input').val("");
  });
   
  $("#submit").click(function(){
       
      var input = $("#userInput").val();
      console.log(input);
       
      $.getJSON(
           
          "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC",
           
          function(response){
              console.log(response);
              $('.text-center').append('<img src=' + response.data[0].images.fixed_width_downsampled.url + '>');
          });
           
       
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