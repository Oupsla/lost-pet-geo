(() => {
  angular
    .module('list')
    .controller('ListCtrl', listController);

    listController.$inject = [];
    function listController() {
      var self = this;

      function init() {
        self.listPet = [
          {
            type:"chien", name: "toutou", state : "Perdu", race: "bichon", color: "blanc"
          },
          {
            type:"chat", name: "chaton", state : "Perdu", race: "", color: "noir"
          },

        ];
      }
      init();
      console.log(self.listPet);
    }
})();
