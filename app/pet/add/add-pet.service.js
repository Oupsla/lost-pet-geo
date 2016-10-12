(() => {
  angular
    .module('addPet')
    .service('AddPetService', addPetService);

  addPetService.$inject = ['$q'];
  function addPetService($q) {
    var self = this;
  }
})();
