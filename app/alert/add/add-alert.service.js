(() => {
  angular
    .module('addAlert')
    .service('AddAlertService', addAlertService);

  addAlertService.$inject = ['$http'];
  function addAlertService($http) {
    let self = this;

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
