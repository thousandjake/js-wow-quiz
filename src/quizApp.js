var Quiz  = function() {
  this.counter = 0;
  this.score = 0;
};

Quiz.prototype.renderQuestion = function() {
  var self = this;

  $.ajax({
    url: "questions.json"
  })
  .done(function(data) {
    var question = "<h3> "+data.list[self.counter].question+ "</h3>";
    var choices ="";
    for(var i=0;i<data.list[self.counter].choice.length;i++) {
      choices += "<input type='radio' name='choices' value='"+(i+1)+"'/>"+data.list[self.counter].choice[i]+"<br>";
    }
    var button = "<input type='button' id='next' value='next'/>";
    $("#quiz").append(question).append(choices).append(button);

    $("#next").click(function(){
      self.checkAnswer(function(){
        self.score++;
      });
    });
  })
  .fail(function () {
    alert('FUCK!');
  });
}

Quiz.prototype.checkAnswer = function(onRight) {
  var self = this;

  $.getJSON("questions.json")
  .done(function(data){
    var answer = data.list[self.counter].answer;
    var choice = $("input[name='choices']:checked").val();
    if(choice === answer) {
      onRight();
    }
    $("#quiz").empty();
    if(self.counter<data.list.length-1) {
      self.counter++;
      self.renderQuestion();
    }
    else {
      self.renderScore();
    }
  })
  .fail(function(data){
  alert('FUCK!');
  });
};

Quiz.prototype.renderScore = function() {
  var finalScore = "<h3>You got "+this.score+" out of "+(this.counter+1)+" correct!</h3>";
  $("#quiz").append(finalScore);
};


$(document).ready(function() {
  var wowQuiz = new Quiz();
  wowQuiz.renderQuestion();
});
