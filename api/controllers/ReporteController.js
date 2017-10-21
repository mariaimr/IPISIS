/**
 * ReporteController
 *
 * @description :: Server-side logic for managing Reporte
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
  const nodeExcel = require('excel-export');
module.exports= {
  proyectosAsignados: function (req, res) {

    var conf ={};

    conf.cols = [{
        caption:'Grupo Mares',
        captionStyleIndex: 1,
        type:'string',
        width:30
      },{
        caption:'Nombre Proyecto',
        type:'string',
        width:30
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
      width:30
    },{
      caption:'fecha de Aprobación',
      type:'string',
      width:30
    }
  ];
  
    conf.rows = [
      ['123-1', 'Ipisis 1', ["Neyder","Maria"], ["correo1","correo2"], ["tutor1","tutor2"], ["correo1","correo2"],"acepta","...","2017/08/06"],
      ['123-2','Ipisis 2', ["Neyder","Maria"],  ["correo1","correo2"], ["tutor1","tutor2"], ["correo1","correo2"],"acepta","...","2017/08/06"],
      ['123-3', 'Ipisis 3', ["Neyder","Maria"], ["correo1","correo2"], ["tutor1","tutor2"], ["correo1","correo2"],"acepta","...","2017/08/06"],
      ['123-4', 'Ipisis 4', ["Neyder","Maria"], ["correo1","correo2"], ["tutor1","tutor2"], ["correo1","correo2"],"acepta","...","2017/08/06"]
    ];
  var result = nodeExcel.execute(conf);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats');
  res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
  res.end(result, 'binary');

  }
}
