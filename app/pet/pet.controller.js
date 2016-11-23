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

    function init() {
      getPet($stateParams.petId);
    }

    init();
  }
})();
