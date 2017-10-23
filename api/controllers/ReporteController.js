/**
 * ReporteController
 *
 * @description :: Server-side logic for managing Reporte
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var variable;
  const nodeExcel = require('excel-export');
module.exports= {
  proyectosAsignados: function (req, res) {

    let conf ={cols: '', rows:''};
    let datos= [];
    let row=[];
    let filas= [];

    conf.cols = [{
        caption:'Grupo Mares',
        captionStyleIndex: 1,
        type:'string',
        width:30
      },{
        caption:'Nombre Proyecto',
        type:'string',
        width:90
    },{
      caption:'Estudiantes',
      type:'string',
      width:30
    },{
      caption:'Correo',
      type:'string',
      width:30
    },{
      caption:'tutor',
      type:'string',
      width:30
    },{
      caption:'Correo',
      type:'string',
      width:30
    },{
      caption:'Estado',
      type:'string',
      width:30
    },{
      caption:'Observación',
      type:'string',
      width:200
    },{
      caption:'fecha de Aprobación',
      type:'string',
      width:30
    }
  ];

let consulta = `SELECT DISTINCT p.grupo_mares, p.nombre AS 'proyecto', est.nombre AS 'estudiante' , est.correo AS 'estudiante_email', prof.nombre AS 'tutor', prof.correo AS 'tutor_email', hi.estado, hi.observacion, hi.fecha_actualizacion FROM proyecto p INNER JOIN inscripcion i ON p.inscripcion_id = i.id INNER JOIN historial_inscripcion hi ON hi.inscripcion_id = i.id AND hi.estado = :aceptada OR hi.estado = :rechazada INNER JOIN oferta o ON i.oferta_id = o.id INNER JOIN profesor prof ON prof.id = o.profesor_id INNER JOIN equipo eq ON i.equipo_codigo = eq.codigo INNER JOIN equipo_estudiante ee ON eq.codigo = ee.equipo_codigo INNER JOIN estudiante est ON ee.estudiante_id = est.id`;

sequelize.query(consulta, { replacements: { aceptada: 'ACEPTADA' , rechazada: 'RECHAZADA'}, type: sequelize.QueryTypes.SELECT})
  .then(reporte => {
    reporte.forEach(function(item) {
      for (var clave in item){
          if (item.hasOwnProperty(clave)) {
            row.push(item[clave]);
          }
        }
        filas.push(row);
        row=[];
  });


    console.log(conf.rows);
    variable = filas;

});
//  conf.rows= variable.slice();
  console.log(variable);
  var result = nodeExcel.execute(conf);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats');
  res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
  res.end(result, 'binary');

  }
}
