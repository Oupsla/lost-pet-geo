(() => {
  'use strict';

  angular
    .module('accountUpdate')
    .controller('AccountUpdateCtrl', accountUpdateController);

  accountUpdateController.$inject = ['$state', '$stateParams', 'AccountService'];

  function accountUpdateController($state, $stateParams, AccountService) {
    let self = this;

    function getAccount() {
      AccountService.getAccount(self.account.id).then(function (result) {
        self.account = result;
      });
    }

    self.updateAccount = function () {
      AccountService.updateAccount(self.account).then(function () {
        $state.go('tab.account');
      });
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
