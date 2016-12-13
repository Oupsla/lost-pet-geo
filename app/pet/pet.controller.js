(() => {
  angular
    .module('pet')
    .controller('PetCtrl', alertController);

  alertController.$inject = ['$stateParams', 'PetService'];
  function alertController($stateParams, PetService) {
    let self = this;


    function getPet(id) {
      PetService.getPet(id).then(function (result) {
        self.pet = result;
        self.pet.species.image = self.images[self.pet.species.name];
      });
    }

    self.deletePet = function () {
      PetService.deletePet(self.petId).then(function () {
        $state.go("nav.listPet");
      });
    };

    function init() {
      self.petId = $stateParams.petId;
      self.images = PetService.getImages();
      getPet(self.petId);
    }

    init();
  }
})();
