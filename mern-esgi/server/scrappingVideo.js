// https://pomber.github.io/covid19/timeseries.json

const { FileGenerator, Scrapper } = require("./scrapper");

const scrapper = new Scrapper(
  { url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" },
  (data) => data,
  (data) => FileGenerator(data, "./bunny.mp4")
);

scrapper.scrap();
