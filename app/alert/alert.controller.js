(() => {
  angular
    .module('alert')
    .controller('AlertCtrl', alertController);

  alertController.$inject = ['$stateParams', 'AlertService', 'PetService', 'AccountService'];
  function alertController($stateParams, AlertService, PetService, AccountService) {
    let self = this;

    function getAlert(id) {
      self.loading = true;
      function getAccountId() {
        self.userId = AccountService.getAccountId();
      }
      AlertService.getAlert(id)
        .then(function (result) {
          self.alert = result;
          self.alert.pet.species.image = self.images[self.alert.pet.species.name];
        })
        .finally(() => self.loading = false)
    }

    function init() {
      self.images = PetService.getImages();
      getAlert($stateParams.alertId);
    }

    init();
  }
})();
