(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'ListPetService'];
  function listPetController($stateParams, ListPetService) {
    let self = this;

    function getListPet() {
      ListPetService.getListPet(self.accountId).then(function(result) {
       self.listPet = result;
       });
    }

    function init() {
      self.accountId = $stateParams.accountId;
      getListPet();
    }

    init();
  }
})();
