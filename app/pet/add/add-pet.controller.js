(() => {
  'use strict';

  angular
    .module('addPet')
    .controller('AddPetCtrl', addPetController);

  addPetController.$inject = [];

  function addPetController() {
    // let self = this;

    console.log("AddPetCtrl", this);
  }
})();
