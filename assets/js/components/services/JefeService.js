angular.module('ipisis')
.factory('JefeService', ['$http','FileSaver', 'Blob', function($http, FileSaver, Blob) {
	return {

		// Servicio para obtener una lista de los profesores registrados en el sistema.
		getProfesores: function() {
			var profesores = $http({
				url: '/profesor/getAll',
				method: 'GET',
			});
			return profesores;
		},

		reportExcel: function(){
		return $http({
			    url: '/reporte/proyectosAsignados',
			    method: "GET",
			    headers: {
			       'Content-type': 'application/json',
						 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
						 'Access-Control-Allow-Origin': '*'
			    },
			    responseType: 'arraybuffer' //'blob'
			}).success(function (data, status, headers, config) {
			    var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
						FileSaver.saveAs(blob, 'report_file' + '.xlsx');
			}).error(function (data, status, headers, config) {
			    //upload failed
			});

		}
	};
}]);
