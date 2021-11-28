// https://pomber.github.io/covid19/timeseries.json

const { FileGenerator, Scrapper } = require("./scrapper");

const scrapper = new Scrapper(
  { url: "https://flylib.com/books/1/2/1/html/2/148_files/image002.gif" },
  (data) => data,
  (data) => FileGenerator(data, "./image.gif")
);

scrapper.scrap();
