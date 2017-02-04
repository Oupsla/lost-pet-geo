(() => {
  angular
    .module('alert')
    .service('AlertService', alertService);

  alertService.$inject = ['$http'];
  function alertService($http) {
    let self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";
    self.getListAlert = function () {
      return $http.get(url + "alerts/")
        .then((resp) => resp.data);
    };

    self.getAlert = function (id) {
      return $http.get(url + "alerts/" + id)
        .then((resp) => resp.data);
    };

    self.delete = function(id) {
      return $http.delete(url + "alerts/"  + id)
        .then((resp) => resp.data);
    };

    self.addAlert = function (alert) {
      alert.location = [alert.position.lat, alert.position.lng];
      return $http.post(url + "alerts", alert)
        .then((resp) => resp.data);
    };

    self.updateAlert = function (alert) {
      return $http.put(url + "alerts/" + alert._id, alert)
        .then((resp) => resp.data);
    };
  }
})();
