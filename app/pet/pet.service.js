(() => {
  angular
    .module('pet')
    .service('PetService', petService);

  petService.$inject = ['$q', '$http'];
  function petService($q, $http) {
    var self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/";
    self.getPet = function (id) {
      return $http.get(url + "pets/" + id)
        .then((resp) => resp.data);
    };
  }
})();
