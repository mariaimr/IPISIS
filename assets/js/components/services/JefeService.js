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
			    url: 'http://192.168.192.17:3000/Excel',
			    method: "GET",
			    headers: {
			       'Content-type': 'application/json'
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
