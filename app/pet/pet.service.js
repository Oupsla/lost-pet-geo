(() => {
  angular
    .module('pet')
    .service('PetService', petService);

  petService.$inject = ['$http'];
  function petService($http) {
    let self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";

    self.getListPet = function (userId) {
      return $http.get(url + "users/" + userId + "/pets/")
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
      return $http.put(url + "pets/" + pet._id, pet)
        .then((resp) => resp.data);
    };

    self.deletePet = function (id) {
      return $http.delete(url + "pets/" + id)
        .then((resp) => resp.data);
    };

    self.addPet = function (pet) {
      return $http.post(url + "pets", pet)
        .then((resp) => resp.data);
    };
  }
})();
