(() => {
  angular
    .module('pet')
    .config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider
      .state('nav.pet', {
        url: '/pet/:petId',
        views: {
          'menuContent': {
            templateUrl: 'pet/pet.html',
            controller: 'PetCtrl',
            controllerAs: 'PetCtrl'
          }
        }
      });
  }
})();
