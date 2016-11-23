(() => {
  angular
    .module('updateAlert')
    .service('UpdateAlertService', updateAlertService);

  updateAlertService.$inject = ['$http'];
  function updateAlertService($http) {
    let self = this;

    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";

    self.getSpecies = function () {
      return $http.get(url + "pets/species")
        .then((resp) => resp.data);
    };

    self.getBreeds = function (species) {
      return $http.get(url + "pets/species/" + species + "/breeds")
        .then((resp) => resp.data);
    };

    self.updateAlert = function (alert) {
      return $http.post(url + "alert/update", alert)
        .then((resp) => resp.data);
    };
  }
})();
