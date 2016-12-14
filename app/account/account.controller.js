(() => {
  'use strict';

  angular
    .module('account')
    .controller('AccountCtrl', accountController);

  accountController.$inject = ['AccountService'];

  function accountController(AccountService) {
    let self = this;

    self.updateAccount = function() {
      AccountService.change();
      getAccountId();
      getAccount();
    };

    function getAccount() {
      AccountService.getAccount(self.account.id)
        .then(function (result) {
          self.account = result;
        })
        .finally(() => self.loading = false);
    }

    function getAccountId() {
      self.account.id = AccountService.getAccountId();
    }

    function init() {
      self.loading = true;
      self.account = {};
      getAccountId();

      getAccount();
      self.today = new Date();
    }

    init();
  }
})();
