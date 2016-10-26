(() => {
  angular
    .module('listPet')
    .config(configListPet);

  configListPet.$inject = ['$stateProvider'];
  function configListPet($stateProvider) {
    $stateProvider
      .state('nav.listPet', {
          url: '/listPet',
          templateUrl: 'list/pet/list-pet.html',
          controller: 'ListPetCtrl',
          controllerAs: 'ListPetCtrl'
        }
      );
  }
})
();
