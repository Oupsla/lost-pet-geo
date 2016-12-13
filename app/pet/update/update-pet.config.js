(() => {
  'use strict';
  angular
    .module('updatePet')
    .config(configUpdatePet);

  configUpdatePet.$inject = ['$stateProvider'];

  function configUpdatePet($stateProvider) {
    $stateProvider
      .state('nav.updatePet', {
        url: '/pet/update/:petId',
        views: {
          'menuContent': {
            templateUrl: 'pet/update/update-pet.html',
            controller: 'UpdatePetCtrl',
            controllerAs: 'UpdatePetCtrl'
          }
        }
      });
  }
})();
