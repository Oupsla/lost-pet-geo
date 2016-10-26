(() => {
  angular
    .module('alert')
    .config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider
      .state('nav.alert', {
        url: '/alert/:alertId',
        views: {
          'menuContent': {
            templateUrl: 'alert/alert.html',
            controller: 'AlertCtrl',
            controllerAs: 'AlertCtrl'
          }
        }
      });
  }
})();
