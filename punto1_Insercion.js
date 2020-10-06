// const db = requiere('./estudiante.js');
// const Estudiante = new Estudiante

const Sequelize = require('sequelize');




const sequelize = new Sequelize('escuela','escuela','',{
    host:'localhost',
    dialect:'mariadb'
})

/*Autenticando datos para acceder a la base de datos*/

sequelize
  .authenticate()
  .then(() => {
    console.log('Se ha establecido correctamente la conexion.');
  })
  .catch(err => {
    console.error('No se ha podido conectar a la base de datos:', err);
  });


  //Crear tabla estudiante

  class Estudiante extends Sequelize.Model{}
  Estudiante.init({
    Nombre:Sequelize.STRING,
    Apellido:Sequelize.STRING,
    Dni:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        //autoIncrement:true
    }

  },{sequelize, modelName: 'estudiante'})


  //INSERTAR ESTUDIANTE

  sequelize.sync()
    .then( ()=> Estudiante.create({
        Nombre:'Leandro',
        Apellido:'Almiron',
        Dni:40463933
    }))
        .then(jane => {
            console.log(jane.toJSON())
        })
