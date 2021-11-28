const { Model, DataTypes } = require("sequelize");
const connection = require("../../lib/sequelize");
const User = require("./User");

class Article extends Model {}

Article.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
  },
  {
    sequelize: connection,
    modelName: "Article",
  }
);

// One To One
//Article.belongsTo(User);
//User.hasOne(Article);
//User.belongsTo(Article);

// One To Many
Article.belongsTo(User, { as: "author" });
User.hasMany(Article, { foreignKey: "authorId", as: "writtenArticles" });

// Many To Many
//Article.belongsToMany(User, { as: "coauthors", through: "ArticleUser" });
//User.belongsToMany(Article, { as: "writtenArticles", through: "ArticleUser" });

module.exports = Article;
