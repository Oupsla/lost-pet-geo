(() => {
  angular
    .module('signup')
    .service('SignupService', signupService);

  signupService.$inject = ['$q', '$http'];
  function signupService($q, $http) {
    let self = this;

    self.signup = function (email, password, name) {
      return $http.post('http://lostpet-api.mybluemix.net/signup', {email, password, name})
        .then((resp) => resp.data);
    }

  }
})();
