(() => {
  angular
    .module('listAlert')
    .config(configListAlert);

  configListAlert.$inject = ['$stateProvider'];
  function configListAlert($stateProvider) {
    $stateProvider
      .state('tab.listAlert', {
        url: '/listAlert',
        views: {
          'tab-listAlert': {
            templateUrl: 'listAlert/listAlert.html',
            controller: 'ListAlertCtrl',
            controllerAs: 'ListAlertCtrl'
          }
        }
      });
  }
})();
