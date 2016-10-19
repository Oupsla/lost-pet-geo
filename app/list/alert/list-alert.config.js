(() => {
  angular
    .module('listAlert')
    .config(configListAlert);

  configListAlert.$inject = ['$stateProvider'];
  function configListAlert($stateProvider) {
    $stateProvider
      .state('nav.listAlert', {
        url: '/listAlert',
        views: {
          'menuContent': {
            templateUrl: 'list/alert/list-alert.html',
            controller: 'ListAlertCtrl',
            controllerAs: 'ListAlertCtrl'
          }
        }
      });
  }
})();
