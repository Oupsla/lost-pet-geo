(() => {
  angular
    .module('account')
    .service('AccountService', accountService);

  accountService.$inject = ['$http'];
  function accountService($http) {
    var self = this;

    self.getAccountId = function(){
      return "584532c4926c47001d9209bb";
    };

    self.getAccount = function (id) {
      id = self.getAccountId();
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/users/" + id)
        .then((resp) => resp.data);
    };

    self.updateAccount = function (account) {
      return $http.post(
        "http://lostpet-api.mybluemix.net/api/v1.0/users/",
        {
          account
        })
        .then((resp) => resp.data);
    };
  }
})();
