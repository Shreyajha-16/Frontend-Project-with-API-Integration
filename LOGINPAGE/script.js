var app = angular.module('loginApp', []);

app.controller('LoginController', [
  '$scope',
  '$window',
  function ($scope, $window) {
    $scope.user = { username: '', password: '' };
    $scope.errorMessage = '';

    var validCredentials = { username: 'admin', password: 'password123' };

    $scope.login = function () {
      if (
        $scope.user.username === validCredentials.username &&
        $scope.user.password === validCredentials.password
      ) {
        // Navigate to the correct page
        $window.location.href = '../BreathingChecker/index1.html';
      } else {
        $scope.errorMessage = 'Invalid username or password.';
      }
    };
  },
]);
