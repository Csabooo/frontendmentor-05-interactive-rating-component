/* Azért nem frissül az eredmény, mert a ratings.forEach ciklus hozzá van rendelve a submitButton gomb kattintásához. Tehát csak akkor fog aktiválódni, ha rákattintunk a gombra. Ha valaki rákattint a gombra, akkor már eljutottunk az értékelési folyamat végére, és a kiválasztott értékelést azonnal meg kell jeleníteni a "thank you" állapotban. Javítsuk ki ezt a hibát úgy, hogy a ciklust kihelyezzük a kattintáskezelő függvényen kívülre: */

/* const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")


const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
   
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.textContent = rating.textContent
      
    })
  })
  
}) */


/* Most a ratings.forEach ciklus kívül van a submitButton kattintáskezelő függvényen, így az értékelés megváltoztatása azonnal bekövetkezik, ha valaki rákattint az értékelési gombokra.
 */
const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")


const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")


ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.textContent = rating.textContent

    })
})


submitButton.addEventListener("click", () => {
     mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");

})