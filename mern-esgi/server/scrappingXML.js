// https://pomber.github.io/covid19/timeseries.json

const { Scrapper, FileGenerator } = require("./scrapper");

const scrapper = new Scrapper(
  {
    url: "https://www.myges.fr/teacher/planning-calendar",
    method: "POST",
    headers: {
      Cookie: "JSESSIONID=DC72788EB18928A83CC016E0888FCF22",
    },
    body: {
      "javax.faces.partial.ajax": true,
      "javax.faces.source": "calendar:myschedule",
      "javax.faces.partial.execute": "calendar:myschedule",
      "javax.faces.partial.render": "calendar:myschedule",
      "calendar:myschedule": "calendar:myschedule",
      "calendar:myschedule_start": 1620597600000,
      "calendar:myschedule_end": 1621202400000,
      calendar: "calendar",
      "calendar:filterPlanning": "date",
      "calendar:selectedDate_input": "11/05/21",
      "calendar:myschedule_view": "agendaWeek",
      "javax.faces.ViewState": "-6865120849017222627:-7623662820583832676",
    },
  },
  (data) => data,
  (data) => FileGenerator(data, "./planning.xml")
);

scrapper.scrap();
