var elForm = document.querySelector(".cite-form");
var elDay = elForm.querySelector(".cite-days");

var elResultConvert = document.querySelector(".result-convert");

var elDaySt = "";
var elDayMonday = "Dushanba";
var elDayTuesday = "Seshanba";
var elDayWednesday = "Chorshanba";
var elDayThursday = "Payshanba";
var elDayFriday = "Juma";
var elDaySut = "Shanba";
var elDaySun = "Yakshanba";

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

   if (elDay.value <= elDaySt) {
    elResultConvert.textContent = "Iltimos kerakli kunni kiriting";
   } else if (elDay.value > 0 || elDay.value < 0) {
     elResultConvert.textContent = "Iltimos son kiritmang!";
   } else if (elDay.value == elDayMonday) {
    elResultConvert.textContent = "Monday";
   } else if (elDay.value == elDayTuesday) {
    elResultConvert.textContent = "Tuesday";
   } else if (elDay.value == elDayWednesday) {
    elResultConvert.textContent = "Wednesday";
   } else if (elDay.value == elDayThursday) {
    elResultConvert.textContent = "Thursday";
   } else if (elDay.value == elDayFriday) {
    elResultConvert.textContent = "Friday";
   } else if (elDay.value == elDaySut) {
    elResultConvert.textContent = "Saturday";
   } else if (elDay.value == elDaySun) {
    elResultConvert.textContent = "Sunday";
   } else {
     elResultConvert.textContent = "Uzr bunday so'z aniqlanmadi"
   }
   
console.log(`Kun: ${elResultConvert.textContent}`);
});

