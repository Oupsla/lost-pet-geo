(() => {
  'use strict';

  angular
    .module('add')
    .controller('AddCtrl', addController);

  addController.$inject = [];

  function addController() {
    // let self = this;

    console.log("AddCtrl", this);
  }
})();
