(() => {
  'use strict';

  angular
    .module('signup')
    .controller('SignupCtrl', signupController);

  signupController.$inject = ['$scope', '$state', 'SignupService', '$ionicHistory'];

  function signupController($scope, $state, SignupService, $ionicHistory) {
    let self = this;


    self.signup = function() {
      console.log("SIGNUP user: " + self.email + " - PW: " + self.password + " - Name: " + self.name);

      SignupService.signup(self.email, self.password, self.name)
        .then((data) => {
          console.log(data);
          $ionicHistory.goBack();
        })
        .catch(() => {
          $rootScope.$broadcast('SIGNUP_ERROR');
        });

    }

    self.login = function() {
      $ionicHistory.goBack();
    }
  }



})();
