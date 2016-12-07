(() => {
  angular
    .module('alert')
    .controller('AlertCtrl', alertController);

  alertController.$inject = ['$stateParams', 'AlertService'];
  function alertController($stateParams, AlertService) {
    let self = this;

    function getAlert(id) {

      AlertService.getAlert(id).then(function (result) {
        self.alert = result;
      });
    }

    function init() {
      getAlert($stateParams.alertId);
    }

    init();
  }
})();
