// https://pomber.github.io/covid19/timeseries.json

const { Scrapper, MongooseGenerator } = require("./scrapper");
const HttpCode = require("./models/mongo/HttpCode");

const scrapper = new Scrapper(
  {
    url: "https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP",
  },
  (data) =>
    Array.from(data.querySelectorAll("table tbody tr:not(:first-child)")).map(
      (trElement) => {
        const fields = trElement.querySelectorAll("th,td");
        return {
          code: fields[0].textContent.trim(),
          message: fields[1].textContent.trim(),
          description: fields[2].textContent.trim(),
        };
      }
    ),
  (data) => MongooseGenerator(data, HttpCode)
);

scrapper.scrap();

HttpCode.create({
  code: 600,
})
  .then((data) => console.log(data))
  .catch((e) => console.error(e));
