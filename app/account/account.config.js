(() => {
  'use strict';
  angular
    .module('account')
    .config(configAccount);

  configAccount.$inject = ['$stateProvider'];

  function configAccount($stateProvider) {
    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'account/account.html',
            controller: 'AccountCtrl',
            controllerAs: 'AccountCtrl'
          }
        }
      });
  }
})();
