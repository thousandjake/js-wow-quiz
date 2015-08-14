var = main function() {

  var = quiz, num = 0, score=0, questions, choices, choice;

  questions = [
    ["Who was the last Guardian of Tirisfal?",
    "Khadgar","Aegwrnn","Medivh","Sargeras",
    "Medivh"],

    ["Who was the famous stonemason that rebuilt Stormwind and was later exiled?",
    "Edwin VanCleef","Bolvar Fordragon","Varian Wrynn","Alexandros Mograine",
    "Edwin VanCleef"],

    ["Who was the boy king of Stormind?",
    "Varian Wrynn", "Anduin Wrynn","Arthas Menethill","Baron Rivendare",
    "Anduin Wrynn"],

  	["Who was the leader of the Blue Dragonflight, and Guardian of Magic?",
    "Malygos","Onyxia","Alexstasza","Chromie"
    "Malygos"]
  ]

  function renderQuestion() {
    quiz = getElementById("quiz");
    quiz.innerHTML = "<h3>"+questions[num][0]+"</h3>";

    for(int x=0;x<(questions[num].length-1);x++) {
      quiz.innerHTML += "<input type='radio' name='choices' value=questions[num][x] />"
    }

    quiz.innerHTML += "<input type='button' onclick='checkAnswer()'>Submit</input>";

  }

  function checkAnswer() {
    choice = choices.value;
    if(choice == questions[num][4]) {
      score++;
    }
    navigation();
  }

  function navigation() {
    if(num < num.length) {
      num++;
      renderQuestion();
    }
    else {
      quiz.innerHTML = "<h3>You got "+score+" out of "+questions.length+"correct";
    }
  }

renderQuestion();

}

$(document).ready(main);
