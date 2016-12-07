(() => {
  'use strict';

  angular
    .module('navs')
    .controller('NavsCtrl', navController);

  navController.$inject = ['AccountService'];

  function navController(AccountService) {
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
        id: '584532c4926c47001d9209bb'
      };

      self.getAccount();
      self.today = new Date();
    }

    init();
  }
})();
