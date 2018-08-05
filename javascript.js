//create an array of strings, each one related to a topic that interests you...
//save to variable called topics

var topics = ["cat", "dog", "bird", "rabbit", "lion", "tiger", "bear", "elephant", "giraffe", "zebra"];

$(document).on("click", ".animals", function(){

var animal = $(this).data("name");    
//link URL needed to query the database...
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=6OfxpYAgLCEdQlStVGkzhw6yl6RkQFPL&q=" + animal + "&limit=10&offset=0&rating=G&lang=en"


  console.log(queryURL);
//run ajax call to the Giphy API

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var results = response.data;

      $("#animals").empty();

      for (var i = 0; i < results.length; i++) {

          var gifDiv = $("<div>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var animalImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          animalImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and animalImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(animalImage);

          // Prepending the gifDiv to the "#animals" div in the HTML
          $("#animals").prepend(gifDiv);
        // }
      }
    });
    //   $("#animals").text(JSON.stringify(response));
    

});


function renderButtons() {    

    $("#animalButtons").empty();
//when page loads, animals buttons get diplayed using the "topics" array
for (var i = 0; i < topics.length; i++){
   
    var buttons = $("<button>");
          // Adding a class of animals to our buttons
          buttons.addClass("animals");
          // Adding a data-attribute
          buttons.attr("data-name", topics[i]);
          // Providing the initial button text
          buttons.attr("src", $(this).data("animate"));

          buttons.attr(("data-state"), $(this).attr("data-state", "animate"));

          buttons.text(topics[i]);
          // Adding the button to the animalButtons div
          $("#animalButtons").append(buttons);



}

}

$("#addAnimal").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var animal = $("#animal-input").val().trim();

    // Adding the animal input from the textbox to our array
    topics.push(animal);
    console.log(topics);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();


    // var imageUrl = response.data.image_original_url;
    
  });

$(document).on("click", ".animals", function (){

  // displayAnimalGiphys();

  var state = $(this).attr("data-state");
  
  if (state == "animate") {

    $(this).attr("src", $(this).data("still"));
    $(this).attr("data-state", "still");
  
  
  }

  else {

    $(this).attr("src", $(this).data("animate"));
    $(this).attr("data-state", "animate");

  }

  
  
});

renderButtons();

//when user clicks one of the animal buttons, the page diplays 10 gifs related to that animal
//when user clicks on an animal gif, the picture plays
//when user clicks the image that playing, video stops playing
//user can input an animal to create another button and search for another animal

