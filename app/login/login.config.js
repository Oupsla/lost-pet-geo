(() => {
  angular
    .module('login')
    .config(configLogin);

    configLogin.$inject = ['$stateProvider'];
    function configLogin($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'LoginCtrl'
        });
    }

})();
