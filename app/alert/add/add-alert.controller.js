(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['AddAlertService'];

  function addAlertController(AddAlertService) {
    let self = this;

    function addAlert() {
      AddAlertService.addAlert(self.alert).then(function (result) {
        console.log(result);
      })
    }
  }
})();
