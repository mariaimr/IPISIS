angular.module('ipisis')
.controller('GenerarReporteController',['$scope','$state','JefeService',
function ($scope, $state, JefeService) {

  $scope.descargarReporte= function() {
    JefeService.reportExcel().then(function(data) {
      console.log(data);
    });

  }
  $scope.descargarReporte();
}])
