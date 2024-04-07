// Calculate program

const numbers = document.getElementById("display");
numbers.forEach(number => {
number.addEventListener("click", (event) => {
    console.log(event.target.innerText);
});
});

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
  
function calculate(){
  try{
    display.value = eval(display.value);
}
catch(error){
    display.value = "Error";
}

}

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
