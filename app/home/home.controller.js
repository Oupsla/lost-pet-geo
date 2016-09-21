(() => {
  angular
    .module('home')
    .controller('HomeCtrl', homeController);

    homeController.$inject = [];

    function homeController() {
      console.log(this);
    }
})();
