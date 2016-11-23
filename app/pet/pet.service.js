(() => {
  angular
    .module('pet')
    .service('PetService', petService);

  petService.$inject = ['$http'];
  function petService($http) {
    var self = this;
    var url = "http://lostpet-api.mybluemix.net/api/v1.0/users/";

    self.getListPet = function (accountId) {
      return $http.get(url + "users/" + accountId + "/pets/")
        .then((resp) => resp.data);
    };

    self.getPet = function (petId) {
      return $http.get(url + "pets/" + petId)
        .then((resp) => resp.data);
    }
  }
})();
