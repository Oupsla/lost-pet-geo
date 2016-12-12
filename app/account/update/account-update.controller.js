(() => {
  'use strict';

  angular
    .module('accountUpdate')
    .controller('AccountUpdateCtrl', accountUpdateController);

  accountUpdateController.$inject = ['$state', '$stateParams', 'AccountService'];

  function accountUpdateController($state, $stateParams, AccountService) {
    let self = this;

    function getAccount() {
      self.loading = true;
      AccountService.getAccount(self.account.id).then(function (result) {
        self.account = result;
      })
      .finally(() => self.loading = false);
    }

    self.updateAccount = function () {
      self.loading = true;
      AccountService.updateAccount(self.account).then(function () {
        $state.go('tab.account');
      })
      .finally(() => self.loading = false);
    };

    function init() {
      self.account = {
        id: $stateParams.userId
      };

      getAccount();
      self.today = new Date();
    }

    init();
  }
})();
