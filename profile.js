const myFavColor = document.querySelector('#color')
const myFavPlace = document.querySelector('#place')
const myFavRitual = document.querySelector('#ritual')




function myColor() {
    alert ("My Favorite color is Blue");
  }
  
  function myPlace() {
    alert ("My favorite Place is anywhere but my job");
  }

  function myRitual() {
    alert ("Meditating in the mornings.");
  }

  myFavColor.addEventListener('click', myColor)
  myFavRitual.addEventListener("click", myRitual)
  myFavPlace.addEventListener("click", myPlace)
  
 