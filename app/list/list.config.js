(() => {
  angular
    .module('list')
    .config(configList);

  configList.$inject = ['$stateProvider'];
  function configList($stateProvider) {
    $stateProvider
      .state('tab.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'list/list.html',
            controller: 'ListCtrl',
            controllerAs: 'ListCtrl'
          }
        }
      });
  }
})();
