(() => {
  'use strict';

  angular
    .module('navs')
    .controller('NavsCtrl', navController);
  navController.$inject = ['AccountService'];

  function navController(AccountService) {
    let self = this;

    self.getAccount = function () {
      if(self.userId) {
        AccountService.getAccount(self.userId).then(function (result) {
          self.account = result;
        });
      }
    };

    self.disconnect = function () {
      console.log('disconnect');
    };

    function getAccountId() {
      self.userId = AccountService.getAccountId();
    }

    function init() {
      getAccountId();

      self.getAccount();
      self.today = new Date();
    }

    init();
  }
})();
