(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'PetService'];
  function listPetController($stateParams, PetService) {
    let self = this;

    function getListPet() {
      PetService.getListPet(self.accountId).then(function(result) {
       self.listPet = result;
       });
    }

    function init() {
      self.accountId = $stateParams.accountId;
      self.accountId = "5807394d416656001d4012e7";
      getListPet();
    }

    init();
  }
})();
