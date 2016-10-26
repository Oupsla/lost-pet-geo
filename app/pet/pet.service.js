(() => {
  angular
    .module('pet')
    .service('PetService', petService);

  petService.$inject = ['$q', '$http'];
  function petService($q, $http) {
    var self = this;

    self.getPet = function (id) {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/pets/" + id)
        .then((resp) => resp.data);
    }
  }
})();
