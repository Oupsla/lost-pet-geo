(() => {
  'use strict';
  angular
    .module('accountUpdate')
    .config(configAccountUpdate);

  configAccountUpdate.$inject = ['$stateProvider'];

  function configAccountUpdate($stateProvider) {
    $stateProvider
      .state('accountUpdate', {
          url: '/accountUpdate/:accountId',
          templateUrl: 'account/update/account-update.html',
          controller: 'AccountUpdateCtrl',
          controllerAs: 'AccountUpdateCtrl'
        }
      );
  }
})
();
