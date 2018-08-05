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

      for (var i = 0; i < results.length; i++) {

        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // Creating a div with the class "item"
          var gifDiv = $("<div class='item'>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var personImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    });
    //   $("#animals").text(JSON.stringify(response));
    

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


    // var imageUrl = response.data.image_original_url;
    
  });

$(document).on("click", ".animals", displayAnimalGiphys);

renderButtons();

//when user clicks one of the animal buttons, the page diplays 10 gifs related to that animal
//when user clicks on an animal gif, the picture plays
//when user clicks the image that playing, video stops playing
//user can input an animal to create another button and search for another animal