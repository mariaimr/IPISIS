angular.module('ipisis')
.controller('GenerarReporteController',['$scope','$state','JefeService',
function ($scope, $state, JefeService) {

  $scope.descargarReporte= function() {
    JefeService.reportExcel().then(function(data) {
      //controlador para el front
      console.log("estoy descargano un Reporte");
    });

  }
  $scope.descargarReporte();
}])
