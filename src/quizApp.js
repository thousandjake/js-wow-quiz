angular.module('quiz',['quiz.service'])
  .run(['Quiz', function (Quiz) {
    Quiz.getJSON();
  }]);
