(() => {
  angular
    .module('login')
    .service('LoginService', loginService);

  loginService.$inject = ['$q', '$http'];
  function loginService($q, $http) {
    let self = this;

    self.login = function (email, password) {
      return $http.post('http://lostpet-api.mybluemix.net/login', {email, password})
        .then((resp) => resp.data);
    }

  }
})();
