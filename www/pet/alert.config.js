(() => {
  angular
    .module('alert')
    .config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider
      .state('alert', {
        url: '/alert/:alertId',
        templateUrl: 'alert/alert.html',
        controller: 'AlertCtrl',
        controllerAs: 'AlertCtrl'
      });
  }
})();
