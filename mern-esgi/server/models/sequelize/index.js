const Article = require("./Article");
const User = require("./User");
const conn = require("../../lib/sequelize");
const UserArticle = require("../mongo/UserArticle");

conn.sync({ alter: true }).then((_) => console.log("Database sync"));

const denormalizeUser = (user) => {
  User.findByPk(user.id, {
    include: [
      {
        model: Article,
        as: "writtenArticles",
        attributes: ["id", "title", "createdAt"],
      },
    ],
  })
    .then((sequelizeData) => {
      data = sequelizeData.toJSON();
      data._id = data.id;
      return UserArticle.findOneAndReplace({ _id: data._id }, data, {
        upsert: true,
        new: true,
      });
    })
    .then((mongoData) => console.log(mongoData));
};

User.addHook("afterCreate", denormalizeUser);
User.addHook("afterUpdate", denormalizeUser);

Article.addHook("afterCreate", (article) =>
  denormalizeUser({ id: article.authorId })
);
Article.addHook("afterUpdate", (article) =>
  denormalizeUser({ id: article.authorId })
);

module.exports = {
  Article,
  User,
};
