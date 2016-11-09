(() => {
  'use strict';

  angular
    .module('login')
    .controller('LoginCtrl', loginController);

  loginController.$inject = ['$scope', '$state', 'LoginService', '$rootScope'];

  function loginController($scope, $state, LoginService, $rootScope) {
    let self = this;


    self.login = function() {
      LoginService.login(self.email, self.password)
        .then((data) => {
          window.localstorage.setItem('user-data', JSON.stringify(data));
          $rootScope.$broadcast('LOGIN_SUCCESS');
        })
        .catch(() => {
          $rootScope.$broadcast('LOGIN_ERROR');
        });
    }

    self.signup = function() {
      $state.go('signup');
    }
  }


})();
