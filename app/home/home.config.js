(() => {
  angular
    .module('home')
    .config(configHome);

  configHome.$inject = ['$stateProvider'];
  function configHome($stateProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'homeCtrl'
          }
        }
      });
  }
})();
