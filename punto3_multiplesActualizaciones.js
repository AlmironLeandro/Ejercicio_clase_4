const Sequelize = require('sequelize');

// const db        = require('./estudiante')
// const Estudiante= new Estudiante;

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
          
  //Actualizacion del estudiante

  Estudiante.update({Nombre:"leandro", Apellido:"Almiron"},
  {
    where:{
      Nombre:'Matias',
        Apellido:'Minichillo', //No hace falta agregar el apellido en el filtro where
    }
  }).then(()=>{
    console.log("Done");
  });

  Estudiante.update({Apellido:"Almiron"},
  {
    where:{
      Nombre:'Cecillia'
    }
  }).then(()=>{
    console.log("Done");
  });