(() => {
  'use strict';
  angular
    .module('addPet')
    .config(configAddPet);

  configAddPet.$inject = ['$stateProvider'];

  function configAddPet($stateProvider) {
    $stateProvider
      .state('nav.addPet', {
        url: '/pet/add',
        views: {
          'menuContent': {
            templateUrl: 'pet/add/add-pet.html',
            controller: 'AddPetCtrl',
            controllerAs: 'AddPetCtrl'
          }
        }
      });
  }
})();
