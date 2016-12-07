(() => {
  'use strict';

  angular
    .module('account')
    .controller('AccountCtrl', accountController);

  accountController.$inject = ['AccountService'];

  function accountController(AccountService) {
    let self = this;

    function getAccount() {
      AccountService.getAccount(self.account.id).then(function (result) {
        self.account = result;
        console.log(result);
      });
    }

    function init() {
      self.account = {
        id: "584532c4926c47001d9209bb"
      };

      getAccount();
      self.today = new Date();
    }

    init();
  }
})();
