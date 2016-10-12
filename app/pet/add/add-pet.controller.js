(() => {
  'use strict';

  angular
    .module('addPet')
    .controller('AddPetCtrl', addPetController);

  addPetController.$inject = ['PetService'];

  function addPetController(PetService) {
     let self = this;

    console.log("AddPetCtrl", this);

    function addPet() {
      PetService.addPet(self.pet).then(function (result) {
        console.log(result);
      });

      function init() {
        self.pet = {};
      }

      init();
    }
  }
})();
