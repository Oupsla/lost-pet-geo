(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = [];

  function addAlertController() {
    // let self = this;

    console.log("AddAlertCtrl", this);
  }
})();
