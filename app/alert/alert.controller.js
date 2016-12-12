(() => {
  angular
    .module('alert')
    .controller('AlertCtrl', alertController);

  alertController.$inject = ['$stateParams', 'AlertService'];
  function alertController($stateParams, AlertService) {
    let self = this;

    function getAlert(id) {
      self.loading = true;
      AlertService.getAlert(id)
        .then(function (result) {
          self.alert = result;
        })
        .finally(() => self.loading = false)
    }

    function init() {
      getAlert($stateParams.alertId);
    }

    init();
  }
})();
