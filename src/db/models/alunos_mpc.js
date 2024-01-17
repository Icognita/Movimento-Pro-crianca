'use strict';
const {
  Model
} = require('sequelize');
const categoria = require('./categoria');


module.exports = (sequelize, DataTypes) => {
  class alunos_MPC extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      // define association here

      // categoria.belongsTo(models.alunos_MPC,{
      //   foreignKey:'id_categoria',
      //   alloowNull:false,
      //   onDelete:'CASCADE',
      // })

    }


      


  }

  alunos_MPC.init({
   
    nome:  DataTypes.STRING,
    data_nascimento:DataTypes.DATE,
    telefone: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero:DataTypes.STRING,
    cidade:DataTypes.STRING,
    UF: DataTypes.STRING,
    pais: DataTypes.STRING,
    ponto_referencia: DataTypes.STRING,
    areaAtuacao: DataTypes.STRING,
    experiencia:  DataTypes.STRING,
    habilidades:DataTypes.STRING,
    disponibilidade:DataTypes.STRING,
    localizacao: DataTypes.INTEGER,
    faixa_etaria:DataTypes.STRING,
    id_categoria:DataTypes.STRING


  },
  {
  sequelize,
  modelName: 'alunos_MPCs',
});
return alunos_MPC;
};
    
    
    

// npx sequelize-cli migrations model:generate --name Aluno --attributes nome:string, dataNascimento:date,  
// telefone:Interger, logradouro:string, numero:string, cidade:string, UF:string, pais:string, 
// pontoReferencia:string,areaAtuacao:string,experiencia:string, habilidades:string,localizacao:string,faixaEtaria:string

    
    
// npx sequelize-cli model:generate --name Aluno --attributes nome:string,   data_nascimento:string,  
// telefone:number, logradouro:string, numero:string, cidade:string, UF:string, pais:string, 
// ponto_referencia:string,areaAtuacao:string, experiencia:string, habilidades:string,l ocalizacao:Interger,faixa_etaria:string

    
    
    
    
    
    
 
  








