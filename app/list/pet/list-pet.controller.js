(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'PetService'];
  function listPetController($stateParams, PetService) {
    let self = this;

    function getListPet() {
      PetService.getListPet(self.userId).then(function(result) {
         self.listPet = result;
        console.log(self.listPet);
       });
    }

    function getSpecies(id) {
      self.loaders.species = true;

      PetService.getSpecies(id).then(function (result) {
        self.species = result;
      }).finally(function () {
        self.loaders.species = false;
      });
    }

    function init() {
      console.log($stateParams);
      self.userId = $stateParams.userId;
      self.userId = '5807394d416656001d4012e7';
      getListPet();
    }

    init();
  }
})();
