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

