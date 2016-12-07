(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'PetService'];
  function listPetController($stateParams, PetService) {
    let self = this;

    function getListPet() {
      PetService.getListPet(self.userId).then(function (result) {
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

    self.update = function () {

    };

    self.delete = function () {

    };

    function init() {
      console.log($stateParams);
      self.userId = $stateParams.userId;
      self.userId = '584532c4926c47001d9209bb';
      getListPet();
    }

    init();
  }
})();
