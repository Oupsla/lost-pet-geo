(() => {
  angular
    .module('pet')
    .controller('PetCtrl', alertController);

  alertController.$inject = ['$stateParams', 'PetService'];
  function alertController($stateParams, PetService) {
    let self = this;
    self.petId = $stateParams.petId;

    function getPet(id) {
      PetService.getPet(id).then(function (result) {
        self.pet = result;
        console.log(result);
      });
    }

    function init() {
      getPet($stateParams.petId);
    }

    init();
  }
})();
