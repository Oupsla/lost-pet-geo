(() => {
  angular
    .module('signup')
    .config(configSignup);

    configSignup.$inject = ['$stateProvider'];
    function configSignup($stateProvider) {
      $stateProvider
        .state('signup', {
          url: '/signup',
          templateUrl: 'signup/signup.html',
          controller: 'SignupCtrl',
          controllerAs: 'SignupCtrl'
        });
    }

})();
