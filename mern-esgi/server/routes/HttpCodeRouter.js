const { Router } = require("express");
const { prettifyErrors } = require("../lib/utils");
const HttpCode = require("../models/mongo/HttpCode");
const router = Router();

router.get("/", (request, response) => {
  HttpCode.find(request.query)
    .then((data) => response.json(data))
    .catch((e) => response.sendStatus(500));
});

router.post("/", (request, response) => {
  new HttpCode(request.body)
    .save()
    .then((data) => response.status(201).json(data))
    .catch((e) => {
      if (e.name === "ValidationError") {
        response.status(400).json(prettifyErrors(e));
      } else {
        response.sendStatus(500);
      }
    });
});
router.get("/:id", (request, response) => {
  HttpCode.findById(request.params.id)
    .then((data) =>
      data === null ? response.sendStatus(404) : response.json(data)
    )
    .catch((e) => response.sendStatus(500));
});

router.put("/:id", (request, response) => {
  HttpCode.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
    runValidators: true,
  })
    .then((data) =>
      data === null ? response.sendStatus(404) : response.json(data)
    )
    .catch((e) => {
      if (e.name === "ValidationError") {
        response.status(400).json(prettifyErrors(e));
      } else {
        response.sendStatus(500);
      }
    });
});

router.delete("/:id", (request, response) => {
  HttpCode.findByIdAndDelete(request.params.id)
    .then((data) =>
      data === null ? response.sendStatus(404) : response.sendStatus(204)
    )
    .catch((e) => response.sendStatus(500));
});

module.exports = router;
