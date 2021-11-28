const { Schema } = require("mongoose");
const conn = require("../../lib/mongo");

const UserArticleSchema = new Schema({
  _id: Number,
  lastname: String,
  firstname: String,
  username: String,
  writtenArticles: Array,
});

const UserArticle = conn.model("UserArticle", UserArticleSchema);

module.exports = UserArticle;
