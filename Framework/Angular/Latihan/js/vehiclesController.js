angular.module('myApp')
  .controller('vehiclesController', function($scope) {
    $scope.vehicles = [
      { type: 'Mobil', wheel: 4 },
      { type: 'Motor', wheel: 2 },
      { type: 'Sepeda', wheel: 2 },
      { type: 'Bajaj', wheel: 3 },
      {type :'Truck' ,wheel :6}
    ];
  });
