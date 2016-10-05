(() => {
  angular
    .module('pet')
    .controller('PetCtrl', alertController);

  alertController.$inject = ['$stateParams', 'PetService'];
  function alertController($stateParams, PetService) {
    var self = this;

    function getAlert(id) {
      PetService.getPet(id).then(function (result) {
        self.pet = result;
      });
    }

    function init() {
      getAlert($stateParams.petId);
    }

    init();
  }
})();
