var main = function() {
  function renderQuestion () {
    question = "<h3> "+questions[counter][0]+"</h3>"
    choiceA = "<input='radio' name='choices' value='A'>"+questions[counter][1]+"<br>";
    choiceB = "<input='radio' name='choices' value='B'>"+questions[counter][2]+"<br>";
    choiceC = "<input='radio' name='choices' value='C'>"+questions[counter][3]+"<br>";
    choiceD = "<input='radio' name='choices' value='D'>"+questions[counter][4]+"<br>";
    button = "<input='button' name'next' onclick='checkAnswer()'>";

    $("#quiz").append(question);
    $("#quiz").append(choiceA);
    $("#quiz").append(choiceB);
    $("#quiz").append(choiceC);
    $("#quiz").append(choiceD);
    $("#quiz").append(button);
  }

  function checkAnswer () {

  }

  function nextQuestion() {

  }

  function renderScore() {

  }

  function resetQuiz() {

  }

  var currentQuestion, choice, choices, choiceA, choiceB, choiceC, choiceD,
  counter = 0;

  renderQuestion();

}

$(document).ready(main);
