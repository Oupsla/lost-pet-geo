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
            templateUrl: 'list/alert/list-alert.html',
            controller: 'ListAlertCtrl',
            controllerAs: 'ListAlertCtrl'
          }
        }
      });
  }
})();
