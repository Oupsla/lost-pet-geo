(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['$stateParams', 'AddAlertService'];
  function addAlertController($stateParams, AddAlertService) {
    let self = this;

    function getAlert() {
      AddAlertService.getAlert(self.alert).then(function(result){
                self.alert = result;
      });
    }

    function getMyPet(id) {
      AddAlertService.getMyPet(id).then(function (result){
        self.pet = result;
      });
    }

    function addAlert() {
      AddAlertService.addAlert(self.alert).then(function (result) {
        console.log(result);
      })
    }

    function init() {
      self.myPetId = $stateParams.petId;
      console.log(self.petId);
      getMyPet(self.myPetId);
    }

    init();
  }
})();
