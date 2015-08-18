var main = function() {
  function renderQuestion () {
    question = "<h3> "+questions[counter][0]+"</h3>"
    choiceA = "<input type='radio' name='choices' value='A'/>"+questions[counter][1]+"<br>";
    choiceB = "<input type='radio' name='choices' value='B'/>"+questions[counter][2]+"<br>";
    choiceC = "<input type='radio' name='choices' value='C'/>"+questions[counter][3]+"<br>";
    choiceD = "<input type='radio' name='choices' value='D'/>"+questions[counter][4]+"<br>";
    button = "<input type='button' id='next' value='next'/>";

    $("#quiz").append(question);
    $("#quiz").append(choiceA);
    $("#quiz").append(choiceB);
    $("#quiz").append(choiceC);
    $("#quiz").append(choiceD);
    $("#quiz").append(button);

    $("#next").click(function(){
      checkAnswer();
    })
  }

  function checkAnswer() {
    choice = $("input[name='choices']:checked").val();
    if(choice == questions[counter][5]) {
      score++;
    }
    nextQuestion();
  }

  function nextQuestion() {
    counter++;
    $("#quiz").empty();
    if(counter<questions.length) {
      renderQuestion();
    }
    else {
      renderScore();
    }
  }

  function renderScore() {
    finalScore = "<h3>You got "+score+" out of "+questions.length+" correct!</h3>";
    $("#quiz").append(finalScore);
  }

  function resetQuiz() {

  }

  var currentQuestion, choice, choices, choiceA, choiceB, choiceC, choiceD,
  counter = 0, score = 0, finalScore;

  renderQuestion();

}

$(document).ready(main);
