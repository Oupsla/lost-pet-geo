(() => {
  angular
    .module('add')
    .service('AddService', addService);

  addService.$inject = ['$q'];
  function addService($q) {
    var self = this;
  }
})();
