(() => {
  angular
    .module('alert')
    .controller('AlertCtrl', alertController);

  alertController.$inject = ['$stateParams', 'AlertService', 'PetService'];
  function alertController($stateParams, AlertService, PetService) {
    let self = this;

    function getAlert(id) {
      self.loading = true;
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
