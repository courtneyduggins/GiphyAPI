//create an array of strings, each one related to a topic that interests you...
//save to variable called topics

var topics = ["cat", "dog", "bird", "rabbit", "lion", "tiger", "bear", "elephant", "giraffe", "zebra"];

function displayAnimalGiphys(){

var animal = $(this).attr("data-name");    
//link URL needed to query the database...
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=6OfxpYAgLCEdQlStVGkzhw6yl6RkQFPL";

//run ajax call to the Giphy API

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    //   $("#animals").text(JSON.stringify(response));
    });

}


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


    var imageUrl = response.data.image_original_url;
    
  });

$(document).on("click", ".animals", displayAnimalGiphys);

renderButtons();

//when user clicks one of the animal buttons, the page diplays 10 gifs related to that animal
//when user clicks on an animal gif, the picture plays
//when user clicks the image that playing, video stops playing
//user can input an animal to create another button and search for another animal