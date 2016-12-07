(() => {
  angular
    .module('listAlert')
    .controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['AlertService'];
  function listAlertController(AlertService) {
    let self = this;

    self.delete = function (item) {
      console.log("delete " + item);
      AlertService.delete(item._id);
    };

    self.update = function (item) {
      console.log("update " + item);
      AlertService.update(item);
    };

    function getListAlert() {
      self.loaders.getList = true;
      AlertService.getListAlert().then(function (result) {
        for (var index in result) {
          result[index].isMyAlert = true;
        }
        self.listAlert = result;
        console.log(result);
      }).finally(function () {
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
