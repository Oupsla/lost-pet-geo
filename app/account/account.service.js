(() => {
  angular
    .module('account')
    .service('AccountService', accountService);

  accountService.$inject = ['$q', '$http'];
  function accountService($q, $http) {
    var self = this;

    self.getAccount = function (id) {
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
