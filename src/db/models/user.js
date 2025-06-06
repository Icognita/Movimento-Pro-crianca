'use strict';
const { Model
} = require('sequelize');
 const bcrypt= require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    senha_hash:DataTypes.VIRTUAL,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
   
//criptografar a senha antes de salvar

User.addHook('beforeSave', async cryptSenha =>{
  if(cryptSenha.senha_hash){
    cryptSenha.password=await bcrypt.hash(cryptSenha.senha_hash,8)
  }
})
return User;

};

