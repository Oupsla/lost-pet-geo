(() => {
  angular
    .module('alert')
    .controller('AlertCtrl', alertController);

  alertController.$inject = ['$scope','$stateParams', 'AlertService'];
  function alertController($scope, $stateParams, AlertService) {
    var self = this;

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
