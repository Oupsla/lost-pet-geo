(() => {
  angular
    .module('pet')
    .service('PetService', petService);

  petService.$inject = ['$http'];
  function petService($http) {
    var self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";

    self.getListPet = function (accountId) {
      return $http.get(url + "users/" + accountId + "/pets/")
        .then((resp) => resp.data);
    };

    self.getPet = function (petId) {
      return $http.get(url + "pets/" + petId)
        .then((resp) => resp.data);
    };

    self.getSpecies = function () {
      return $http.get(url + "pets/species")
        .then((resp) => resp.data);
    };

    self.getBreeds = function (species) {
      return $http.get(url + "pets/species/" + species + "/breeds")
        .then((resp) => resp.data);
    };

    self.updatePet = function (pet) {
      return $http.post(url + "pet/update", pet)
        .then((resp) => resp.data);
    };

    self.addPet = function (pet) {
      return $http.post(url + "pets", pet)
        .then((resp) => resp.data);
    };
  }
})();
