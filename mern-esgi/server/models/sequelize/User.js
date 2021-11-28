const { Model, DataTypes } = require("sequelize");
const connection = require("../../lib/sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {}

User.init(
  {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    password: { type: DataTypes.STRING, allowNull: false },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

const encodePassword = async (user) => {
  user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
};
User.addHook("beforeCreate", encodePassword);
User.addHook("beforeUpdate", encodePassword);

module.exports = User;
