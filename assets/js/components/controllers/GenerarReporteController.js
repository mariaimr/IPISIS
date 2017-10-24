angular.module('ipisis')
.controller('GenerarReporteController',['$scope','$state','JefeService','FileSaver', 'Blob',
function ($scope, $state, JefeService,FileSaver, Blob) {

  $scope.descargarReporte= function() {
    JefeService.getReporte().then(function(datos) {
        $scope.reporte = datos.data;
    });
  }
  $scope.descargarReporte();

  $scope.exportarExcel= function() {
      let blob= new Blob([document.getElementById('exportable').innerHTML],{
        encoding: "UTF-8" ,type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset= UTF-8"
      });
      FileSaver.saveAs(blob,'report_file.xlsx');
  }

}])
