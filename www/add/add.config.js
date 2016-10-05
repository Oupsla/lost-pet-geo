(() => {
  'use strict';
  angular
    .module('add')
    .config(configAdd);

  configAdd.$inject = ['$stateProvider'];

  function configAdd($stateProvider) {
    $stateProvider
      .state('tab.add', {
        url: '/add',
        views: {
          'tab-add': {
            templateUrl: 'add/add.html',
            controller: 'AddCtrl',
            controllerAs: 'AddCtrl'
          }
        }
      });
  }
})();
