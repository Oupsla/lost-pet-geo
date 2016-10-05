(() => {
  angular
    .module('account')
    .service('AccountService', accountService);

  accountService.$inject = ['$q'];
  function accountService($q) {
    var self = this;
  }
})();
