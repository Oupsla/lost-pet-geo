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
      });
    }

    function init() {
      self.account = {
        id: "5807394d416656001d4012e7"
      };

      getAccount();
      self.today = new Date();
    }

    init();
  }
})();
