(() => {
  angular
    .module('addPet')
    .service('AddPetService', addPetService);

  addPetService.$inject = ['$q', '$http'];
  function addPetService($q, $http) {
    let self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";

    self.addPet = function (id) {
      return $q((resolve, reject) => {
        return resolve({
          id: id,
          type: 'chien',
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc',
          particularity: 'Bla bla bla'
          /*vaccins: {
           rage: 'ok'
           }*/
        });
      });
    };

    self.getSpecies = function () {
      return $http.get(url + "pets/species")
        .then((resp) => resp.data);
    };

    self.getBreeds = function (species) {
      return $http.get(url + "pets/species/" + species  +"/breeds")
        .then((resp) => resp.data);
    };

  }
})();
