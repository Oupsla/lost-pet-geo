(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'PetService', '$state'];
  function listPetController($stateParams, PetService, $state) {
    let self = this;

    function getListPet() {
      self.listPet = [];
      self.loaders.getList = true;
      PetService.getListPet(self.userId).then(function (result) {
        self.listPet = result;
      }).finally(function () {
      }).finally(function () {
        self.loaders.getList = false;
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

    self.delete = function (id) {
      PetService.deletePet(id).then(function () {
        reset();
      });
    };

    function reset() {
      getListPet();
    }

    function init() {
      self.loaders = {getList: true};

      self.userId = $stateParams.userId;
      self.userId = '584532c4926c47001d9209bb';
      getListPet();
    }

    init();
  }
})();
