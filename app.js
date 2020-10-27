'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
  
}

function displayResults(responseJson) {
  console.log(responseJson);
  //return responseJson.map(response=> displayResults(response)).join('');
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img"> `
  )
  //display the results section
  $('.results').removeClass('hidden');
}
function generateThreeImages(messages){
console.log('hello world');
let messageArray = [];
let indexArray = [];
  messages.forEach(message => {
  messageArray.push(message);
  indexArray.push(messages.indexOf(response));
}); 

return messageArray.map(message => generateThreeImages(message)).join('');

}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
    generateThreeImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  generateThreeImages();
  
});