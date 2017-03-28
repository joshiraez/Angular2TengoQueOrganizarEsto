(function () {
var modulo = angular.module("petclinicApp");
modulo.controller('OwnersControllers', function(ownersFactory) {

   var vm = this;

    vm.name;
    vm.address;
    vm.phone;
    vm.numPets;
    
   vm.filtro = "";
    
    vm.owners = ownersFactory.getOwners();
    vm.deleteOwner = function(index) {
        ownersFactory.deleteOwner(index);
    };
    
    vm.saveOwner = function(){
        ownersFactory.createOwner(vm.name, vm.address, vm.phone, vm.numPets);
    };
    
   }
  );
}());