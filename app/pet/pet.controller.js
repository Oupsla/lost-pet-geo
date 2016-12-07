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
      });
    }

    self.deletePet = function () {
      PetService.deletePet(self.petId).then(function () {
        $state.go("nav.listPet");
      });
    };

    function init() {
      self.petId = $stateParams.petId;
      getPet(self.petId);
    }

    init();
  }
})();
