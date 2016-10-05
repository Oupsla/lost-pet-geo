(() => {
  angular
    .module('pet')
    .config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider
      .state('pet', {
        url: '/pet/:petId',
        templateUrl: 'pet/pet.html',
        controller: 'PetCtrl',
        controllerAs: 'PetCtrl'
      });
  }
})();
