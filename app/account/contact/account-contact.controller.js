(() => {
  'use strict';

  angular
    .module('accountContact')
    .controller('AccountContactCtrl', accountContactController);

  accountContactController.$inject = ['$stateParams', 'AccountService'];

  function accountContactController($stateParams, AccountService) {
    let self = this;

    function getAccount() {
      self.loading = true;
      AccountService.getAccount(self.userId).then(function (result) {
        self.account = result;
      })
        .finally(() => self.loading = false);
    }

    function init() {
      self.userId = $stateParams.userIdFound;
      console.log(self.userId);
      getAccount();
      self.today = new Date();
    }

    init();
  }
})();
