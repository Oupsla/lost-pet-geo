(() => {
  angular
    .module('updatePet')
    .service('UpdatePetService', updatePetService);

  updatePetService.$inject = ['$q', '$http'];
  function updatePetService($q, $http) {
    let self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";

    self.updatePet = function (pet) {
      return $http.post(url + "pet/update", pet)
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
  }
})();
