angular.module('quiz.things',[])
  .directive('quiz', [ function () {
    return {
      template:
      '<div>{{data.score}}</div><ol><li ng-repeat="question in data.questions"><quiz-question question="question"></quiz-question></li></ol>',
      restrict: 'E',
      controller: ['Quiz', '$scope', function (Quiz, $scope) {
        $scope.data = Quiz.getData();
        Quiz.getJSON();
      }]
    };
  }])
  .directive('quizQuestion', [ function () {
    return {
      template: '<div>{{question.text}}</div><ol><li ng-repeat="choice in question.choices" ng-class={"correct":color==="green","incorrect":color==="red"}><input type="radio" name="question-{{question.id}}" ng-click="scoreCheck($index+1)"><label>{{choice}}</label></li></ol>',
      restrict: 'E',
      scope: {
        question: '='
      },
      controller: ['Quiz', '$scope', function (Quiz, $scope) {
        $scope.data = Quiz.getData();
        var answeredCorrectly = false;
        $scope.scoreCheck = function (choiceIndex) {
          if($scope.question.answer === choiceIndex && !answeredCorrectly) {
            console.log(choiceIndex+" "+answeredCorrectly+" ");
            $scope.data.score ++;
            answeredCorrectly = true;
            $scope.color = "green";
          } else if($scope.question.answer !== choiceIndex && answeredCorrectly) {
            console.log(choiceIndex+" "+answeredCorrectly+" ");
            $scope.data.score --;
            answeredCorrectly = false;
            $scope.color = "red";
          } else if($scope.question.answer !== choiceIndex && !answeredCorrectly) {
            console.log(choiceIndex+" "+answeredCorrectly+" ");
            $scope.color = "red";
          }
        };
      }]
    };
  }])
  .service('Quiz', [ '$http', function ($http) {
    var data = {
      questions: [],
      score: 0
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
            newQuestion.id = questionJSON.id;
            newQuestion.text =  questionJSON.text;
            newQuestion.choices = questionJSON.choice;
            newQuestion.answer = questionJSON.answer;
          });
        });
    };
  }]);
