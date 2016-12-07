(() => {
  'use strict';
  angular
    .module('updateAlert')
    .config(configUpdateAlert);

  configUpdateAlert.$inject = ['$stateProvider'];

  function configUpdateAlert($stateProvider) {
    $stateProvider
      .state('nav.updateAlert', {
        url: '/alert/update/:alertId',
        views: {
          'menuContent': {
            templateUrl: 'alert/update/update-alert.html',
            controller: 'UpdateAlertCtrl',
            controllerAs: 'UpdateAlertCtrl'
          }
        }
      });
  }
})();
