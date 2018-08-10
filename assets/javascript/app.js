
//Timer
var time =100;
var intervalID;
$("#start").on("click", run);

//Run function to start timer
function run(){
    intervalID = setInterval(decrease,1000);
    renderQuestion();
}
//Decreases time
function decrease(){
    time--;
//Shows timer
$("#timer").text("Time Left: "+ time);
}
if(time ===0){
    stop();
    alert("Time Up!")
}
run();

//Create Table for questions
var questions = [
    {q: "Is 14 the molecular weight of nitrogen?", a: "t"},
{q: "Is silver a solid at room temperature and pressure?", a: "t"},
{q: "Is aluminium the color yellow?", a: "f"}];
var correct=0;

var questionIndex = 0;

    // Function to render questions.
    function renderQuestion() {
      // If there are still more questions, render the next one.
      if (questionIndex <= (questions.length - 1)) {
        $("#question").innerHTML = questions[questionIndex].q;
      }
      // If there aren't, render the end game screen.
      else {
        $("#question").innerHTML = "Game Over!";
        $("#Correct").innerHTML = "Final Correct: " + correct + " out of " + questions.length;
      }
    }

    // Function that updates the Correct...
    function updateCorrect() {
      $("#Correct").innerHTML = "Correct: " + correct;
    }


    // MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.
    renderQuestion();
    updateCorrect();

    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

      // If there are no more questions, stop the function.
      if (questionIndex === questions.length) {
        return;
      }

      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = event.key.toLowerCase();

      // Only run this code if "t" or "f" were pressed.
      if (userInput === "t" || userInput === "f") {

        // If they guess the correct answer, increase and update Correct, alert them they got it right.
        if (userInput === questions[questionIndex].a) {
          alert("Correct!");
          correct++;
          updateCorrect();
        }
        // If wrong, alert them they are wrong.
        else {
          alert("Wrong!");
        }

        // Increment the questionIndex variable and call the renderQuestion function.
        questionIndex++;
        renderQuestion();

      }

    };
