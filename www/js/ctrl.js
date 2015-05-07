angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  // don't be scared by the image value, its just datauri

  $scope.items = [{
    id: 1,
    name: 'Ailvan',
    image: 'img/Ailvan.jpg'  
  }, {
    id: 2,
    name: 'Marcílio',
    image: 'img/Marcílio.jpg' 
  }, {
    id: 3,
    name: 'Abud',
    image: 'img/Abud.jpg'}
    ];

});