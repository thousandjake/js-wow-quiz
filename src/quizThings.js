angular.module('quiz.things',[])
  .directive('quiz', [ function () {
    return {
      template:
      '<ol><li ng-repeat="question in data.questions"><quiz-question question="question"></quiz-question></li></ol>',
      restrict: 'E',
      controller: ['Quiz', '$scope', function (Quiz, $scope) {
        $scope.data = Quiz.getData();
        Quiz.getJSON();
      }]
    };
  }])
  .directive('quizQuestion', [ function () {
    return {
      template: '<div>Quiz Shit Question</div>',
      restrict: 'E',
      scope: {
        question: '='
      },
      controller: [function () {

      }]
    };
  }])
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
