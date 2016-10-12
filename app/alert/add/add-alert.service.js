(() => {
  angular
    .module('addAlert')
    .service('AddAlertService', addAlertService);

  addAlertService.$inject = ['$q'];
  function addAlertService($q) {
    var self = this;
  }
})();
