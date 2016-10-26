(() => {
  'use strict';
  angular
    .module('account')
    .config(configAccount);

  configAccount.$inject = ['$stateProvider'];

  function configAccount($stateProvider) {
    $stateProvider
      .state('nav.account', {
        url: '/account',
        views: {
          'menuContent': {
            templateUrl: 'account/account.html',
            controller: 'AccountCtrl',
            controllerAs: 'AccountCtrl'
          }
        }
      });
  }
})();
