(() => {
  angular
    .module('alert')
    .service('AlertService', alertService);

  alertService.$inject = ['$http'];
  function alertService($http) {
    var self = this;
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
      return $http.delete(url + "delete/alerts/"  + id)
        .then((resp) => resp.data);
    };

    self.update = function(alert) {
      return $http.post(url + "delete/alerts/"  + alert.id + "/update/", alert)
        .then((resp) => resp.data);
    };
  }
})();
