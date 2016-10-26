(() => {
  'use strict';
  angular
    .module('accountUpdate')
    .config(configAccountUpdate);

  configAccountUpdate.$inject = ['$stateProvider'];

  function configAccountUpdate($stateProvider) {
    $stateProvider
      .state('nav.accountUpdate', {
          url: '/accountUpdate/:accountId',
          views: {
            'menuContent': {
              templateUrl: 'account/update/account-update.html',
              controller: 'AccountUpdateCtrl',
              controllerAs: 'AccountUpdateCtrl'
            }
          }
        }
      );
  }
})
();
