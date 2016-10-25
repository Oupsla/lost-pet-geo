(() => {
  angular
    .module('addAlert')
    .service('AddAlertService', addAlertService);

  addAlertService.$inject = ['$http'];
  function addAlertService($http) {
    let self = this;
    self.getMyPet = function (id) {
      return $q((resolve, reject) => {
        return resolve({
          id: id,
          photo : 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          name: 'loulou',
          race: 'bichon',
          type: 'chien',
          particularity: 'aggresif',
          color: 'noir'
        });
      });
    };

    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";

    self.getSpecies = function () {
      return $http.get(url + "pets/species")
        .then((resp) => resp.data);
    };

    self.getBreeds = function (species) {
      return $http.get(url + "pets/species/" + species + "/breeds")
        .then((resp) => resp.data);
    };

    self.addAlert = function (alert) {
      return $http.post(url + "alert/add", alert)
        .then((resp) => resp.data);
    };
  }
})();
