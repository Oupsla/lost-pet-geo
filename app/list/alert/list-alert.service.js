(() => {
  angular
    .module('listAlert')
    .service('ListAlertService', listAlertService);

  listAlertService.$inject = ['$q', '$http'];
  function listAlertService($q, $http) {
    var self = this;

    self.getListAlert = function () {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/alerts/")
        .then((resp) => resp.data);
    }
  }
})();
