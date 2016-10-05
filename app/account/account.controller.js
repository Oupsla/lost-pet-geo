(() => {
  'use strict';

  angular
    .module('account')
    .controller('AccountCtrl', accountController);

  accountController.$inject = [];

  function accountController() {
    var self = this;

    function getAccount() {
      self.account = {};
    }

    function init() {
      getAccount();
    }

    init();
  }
})();
