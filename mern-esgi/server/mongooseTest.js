const CovidStat = require("./models/mongo/CovidStat");

Promise.all([
  CovidStat.create({
    country: "France",
    day_death: 14,
    total_death: 400,
  }),
  new CovidStat({
    country: "Germany",
    day_death: 29,
    total_death: 500,
  }).save(),
])
  .then((_) =>
    CovidStat.aggregate([
      {
        $group: {
          _id: "$country",
          count: { $sum: "$day_death" },
          total: { $last: "$total_death" },
        },
      },
    ])
  )
  .then((data) => console.log(data));
