(() => {
  'use strict';
  angular
    .module('addAlert')
    .config(configAddAlert);

  configAddAlert.$inject = ['$stateProvider'];

  function configAddAlert($stateProvider) {
    $stateProvider
      .state('nav.addAlert', {
        url: '/alert/add/:petId',
        views: {
          'menuContent': {
            templateUrl: 'alert/add/add-alert.html',
            controller: 'AddAlertCtrl',
            controllerAs: 'AddAlertCtrl'
          }
        }
      });
  }
})();
