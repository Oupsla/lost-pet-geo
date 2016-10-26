(() => {
  angular
    .module('listPet')
    .service('ListPetService', listPetService);

  listPetService.$inject = ['$q', '$http'];
  function listPetService($q, $http) {
    var self = this;

    self.getListPet = function (accountId) {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/users/"+accountId+"/pets/") // + accountId)
        .then((resp) => resp.data);
    }
  }
})();
