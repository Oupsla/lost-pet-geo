(() => {
  angular
    .module('listAlert')
    .controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['ListAlertService'];
  function listAlertController(ListAlertService) {
    let self = this;

    function getListAlert() {
      self.loaders.getList = true;
      ListAlertService.getListAlert().then(function (result) {
        self.listAlert = result;
      }).finally(function(){
       self.loaders.getList = false;
      });
    }

    function init() {
      self.loaders = {getList: false};
      getListAlert();
    }

    init();
  }

})();
