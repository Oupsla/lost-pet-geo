(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['$stateParams', 'AddAlertService', 'PetService'];
  function addAlertController($stateParams, AddAlertService, PetService) {
    let self = this;

    function getAlert() {
      AddAlertService.getAlert(self.alert).then(function(result){
          self.alert = result;
      });
    }

    function init() {
      self.myPetId = $stateParams.petId;

      PetService.getPet(self.myPetId).then(function(result){
        self.pet = result;
      });
    }

    init();
  }
})();
