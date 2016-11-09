(() => {
  'use strict';

  angular
    .module('navs')
    .controller('NavsCtrl', navController);

  navController.$inject = ['$scope', '$state', 'AccountService'];

  function navController($scope, $state, AccountService) {
    let self = this;

    self.getAccount = function () {
      AccountService.getAccount(self.nav.id).then(function (result) {
        result.firstName = 'Benjamin';
        result.lastName = 'Coenen';
        result.photo = 'http://www.freeiconspng.com/uploads/account-profile-icon-1.png';
        self.account = result;
      });
    };

    self.disconnect = function () {
      console.log('disconnect');
    };

    function init() {
      self.nav = {
        id: '5807394d416656001d4012e7'
      };

      self.getAccount();
      self.today = new Date();
    }

    $scope.$on('unlogged', () => $state.go('login'));

    init();
  }
})();
