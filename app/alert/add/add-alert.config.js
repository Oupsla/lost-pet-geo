(() => {
  'use strict';
  angular
    .module('addAlert')
    .config(configAddAlert);

  configAddAlert.$inject = ['$stateProvider'];

  function configAddAlert($stateProvider) {
    $stateProvider
      .state('tab.addAlert', {
        url: '/alert/add',
        views: {
          'tab-account': {
            templateUrl: 'alert/add/add-alert.html',
            controller: 'AddAlertCtrl',
            controllerAs: 'AddAlertCtrl'
          }
        }
      });
  }
})();
