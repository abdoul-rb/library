const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.render('payment', {
        items: [
            {title: "savon", quantity: 2},
            {title: "pâte", quantity: 3},
        ]
    })
}).post('/', (req, res) => {
    console.log(req.body);
    res.render('payment', {
        items: [
            {title: "savon", quantity: 2},
            {title: "pâte", quantity: 3},
        ],
        success: true
    });
})

module.exports = router;