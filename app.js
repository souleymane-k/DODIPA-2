'use strict';

function getDogImage(number) {
  fetch('https://dog.ceo/api/breeds/image/random/'+ number)
    .then(response => response.json())
    .then(reponseJson => 
      displayResults(reponseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
      
  
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('#imgView').empty()
  //replace the existing image with the new one
  for (let i=0; i<responseJson.message.length; i++){
   $('#imgView').append(
     `
    <img src="${responseJson.message[i]}" class="results-img">
     
     `  
   )
  
  }

  //display the results section
  $('.results').removeClass('hidden');

}

/**retrutn between 1-50 */
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
     let numberDogs = $('.enter').val();
     $('.enter').val("");
    if(numberDogs<=50){
      getDogImage(numberDogs);
    }else{
      alert('Enter Number Between 1-50')
    };
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  
});
