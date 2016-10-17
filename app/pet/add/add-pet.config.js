(() => {
  'use strict';
  angular
    .module('addPet')
    .config(configAddPet);

  configAddPet.$inject = ['$stateProvider'];

  function configAddPet($stateProvider) {
    $stateProvider
      .state('addPet', {
        url: '/pet/add',
        templateUrl: 'pet/add/add-pet.html',
        controller: 'AddPetCtrl',
        controllerAs: 'AddPetCtrl'
      });
  }
})();
