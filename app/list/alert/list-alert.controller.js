(() => {
  angular
    .module('listAlert')
    .controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['ListAlertService'];
  function listAlertController(ListAlertService) {
    let self = this;

    function getListAlert() {
      ListAlertService.getListAlert().then(function (result) {
        self.listAlert = result;
      });
    }

    function init() {
      getListAlert();
    }

    init();
  }

})();
