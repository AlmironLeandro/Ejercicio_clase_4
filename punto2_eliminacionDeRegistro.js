const Sequelize = require('sequelize');

const sequelize = new Sequelize('escuela','escuela','',{
    host:'localhost',
    dialect:'mariadb'
})

sequelize
.authenticate()
    .then(()=>{
        console.log('Se ha establecido correctamente la conexion.')
    })
        .catch(err => {
            console.error('No se ha podido conectar a la base de datos:', err)
        });

 //Reutilizo la tabla, ya que no se como exportar el modelo, estuve buscando y no lo encontre.

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

 Estudiante.destroy({
     where:{
         Dni:40463933
     }
 })
 .then( ()=>{
     console.log("Estudiante eliminado")
 })
