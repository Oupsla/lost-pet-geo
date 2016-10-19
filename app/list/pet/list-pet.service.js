(() => {
  angular
    .module('listPet')
    .service('ListPetService', listPetService);

  listPetService.$inject = ['$q'];
  function listPetService($q) {
    var self = this;

    self.getListPet = function (accountId) {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/pets/")
        .then((resp) => resp.data);
    }
  }
})();
