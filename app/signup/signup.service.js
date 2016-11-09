(() => {
  angular
    .module('signup')
    .service('SignupService', signupService);

  signupService.$inject = ['$q', '$http'];
  function signupService($q, $http) {
    let self = this;

    self.signup = function (email, password, firstName) {
      return $http.post('http://lostpet-api.mybluemix.net/signup', {email, password, firstName})
        .then((resp) => resp.data);
    }

  }
})();
