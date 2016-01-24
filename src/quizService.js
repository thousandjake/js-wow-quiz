angular.module('quiz.service',[])
  .service('Quiz', [ '$http', function ($http) {
    var data = {
      questions: []
    };

    this.getData = function () {
      return data;
    };

    var addQuestion = function () {
      var question = {text: '',choices: [],answer: 0};
      data.questions.push(question);
      return question;
    };

    this.getJSON = function () {
      $http.get('/questions.json')
        .then(function (response) {
          data.questions = [];
          response.data.list.forEach( function (questionJSON) {
            var newQuestion = addQuestion();
            newQuestion.text =  questionJSON.text;
            newQuestion.choices = questionJSON.choice;
            newQuestion.answer = questionJSON.answer;
          });
        });
    };
  }]);
