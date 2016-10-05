(() => {
  angular
    .module('account')
    .service('AccountService', accountService);

  accountService.$inject = ['$q'];
  function accountService($q) {
    var self = this;

    self.getAccount = function (id) {
      return $q((resolve, reject) => {
        return resolve({
          id: id,
          name: 'marine',
          firstName: 'bal',
          email: 'ooo-mama-ooo@hotmail.fr',
          phone: '0668557173',
          birthdate: new Date('17-04-1993'),
          address: {
            number: 314,
            street: 'rue truc',
            postalCode: 59100,
            city: 'roubaix',
            country: 'france'
          }
        });
      });
    };

    self.updateAccount = function (account) {
      return $q((resolve, reject) => {
        return resolve({})
      });
    };

  }
})();
