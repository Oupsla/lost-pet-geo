(() => {
  angular
    .module('pet')
    .service('PetService', petService);

  petService.$inject = ['$http'];
  function petService($http) {
    var self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";

    self.getListPet = function (userId) {
      return $http.get(url + "users/" + userId + "/pets/")
        .then((resp) => resp.data);
    };

    self.getPet = function (petId) {
      return $http.get(url + "/pets/" + petId)
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

        /*return $q((resolve, reject) => {
          return resolve({
            _id: id,
            updatedAt:"2016-11-23T10:38:19.889Z",
            createdAt:"2016-11-23T10:38:19.889Z",
            breedId:"58356b57622467001d2a90ec",
            speciesId:"58356b3b622467001d2a90eb",
            userId:"5807394d416656001d4012e7",
            __v:0,
            color:"blue",
            photos:'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
            name:"coco"
          });
        });*/
    };
  }
})();
