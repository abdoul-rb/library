const { Router } = require("express");
const { prettifyErrors } = require("../lib/utils");
const Article = require("../models/sequelize/Article");
const { User } = require("../models/sequelize");

const router = Router();

// Article sequelize
router.get("/", (request, response) => {
  const { author, ...rest } = request.query;
  Article.findAll({
    where: rest,
    include: [
      {
        model: User,
        as: "author",
        where: author,
      },
    ],
  })
    .then((data) => response.json(data))
    .catch((e) => console.error(e) || response.sendStatus(500));
});

router.post("/", (request, response) => {
  new Article(request.body)
    .save()
    .then((data) => response.status(201).json(data))
    .catch((e) => {
      if (e.name === "SequelizeValidationError") {
        response.status(400).json(prettifyErrors(e));
      } else {
        response.sendStatus(500);
      }
    });
});
router.get("/:id", (request, response) => {
  Article.findByPk(request.params.id)
    .then((data) =>
      data === null ? response.sendStatus(404) : response.json(data)
    )
    .catch((e) => response.sendStatus(500));
});

router.put("/:id", (request, response) => {
  Article.update(request.body, {
    where: { id: request.params.id },
    returning: true,
    individualHooks: true,
  })
    .then(([, [data]]) =>
      data === undefined ? response.sendStatus(404) : response.json(data)
    )
    .catch((e) => {
      if (e.name === "SequelizeValidationError") {
        response.status(400).json(prettifyErrors(e));
      } else {
        console.log(e);
        response.sendStatus(500);
      }
    });
});

router.delete("/:id", (request, response) => {
  Article.destroy({ where: { id: request.params.id } })
    .then((data) =>
      data === 0 ? response.sendStatus(404) : response.sendStatus(204)
    )
    .catch((e) => response.sendStatus(500));
});

module.exports = router;
