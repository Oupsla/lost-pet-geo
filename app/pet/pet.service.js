(() => {
  angular
    .module('pet')
    .service('PetService', petService);

  petService.$inject = ['$q'];
  function petService($q) {
    var self = this;

    self.getPet = function (id) {
      return $q((resolve, reject) => {
        return resolve({
          id: id,
          type: 'chien',
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc',
          particularity:'Bla bla bla'
          /*vaccins: {
           rage: 'ok'
           }*/
        });
      });
    }
  }
})();
