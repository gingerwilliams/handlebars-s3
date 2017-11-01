const express = require('express');
const router = express.Router();
const fs = require('fs');
const dataFile = require('../data/data.json');
// const jsonData = JSON.stringify(dataFile);

console.log(dataFile.customPropertyNames);


//views
router.get('/', function (req, res, next) {
    res.render('home');
});

router.get('/start', function (req, res, next) {
    res.render('start');
});

router.get('/deliverables', function (req, res, next) {
    res.render('deliverables');
});

router.get('/overview', function (req, res, next) {
    res.render('overview');
});

router.get('/principles', function (req, res, next) {
    res.render('principles');
});

router.get('/colors', function (req, res, next) {
    res.render('colors');
});

router.get('/accordion', function (req, res, next) {
    //console.log(dataJson);
    res.render('accordion', {
        title: dataFile.sections[0].header
    });
    //built in helpers such as if statemtns loops
});

router.get('/components', function (req, res, next) {
    res.render('components', { comment: 'This is a comment', condition: false, anyArray: [1, 2, 3], sample: '<p></p>', file: '"/Users/gingerwilliams/source/onyx-dev/src/organism/_tile.less"' });
    //built in helpers such as if statemtns loops
});


router.get('/:id', function (req, res, next) {
    res.render('test', {

        header: dataFile.sections[req.params.id].header,
        description: dataFile.sections[req.params.id].description
    });
});

// router.get('/test', function (req, res, next) {
//     res.render('test', dataFile);
// });


//////////////////////// REQUIRE DATAFILE

// router.get('/test', function (req, res, next) {
//     //console.log(dataJson);
//     res.render('test', {
//         title: dataFile.sections[1].header
//     });
// });

//////////////////////// HELPERS

// router.get('/test/:id', function (req, res, next) {
//     //console.log(dataJson);
//     res.render('test', {
//         output: req.params.id,
//         helpers: {
//             foo: function () { 
//                 return 'foo.';
//             }
//         }
//     });
// });

//////////////////////// PARAMS ID

// router.get('/components/:id', function (req, res) {
//     res.render('components', { output: req.params.id });
// });


// router.get('/components/:header', function (req, res, next) {
//     res.render('components', {
//         title: data, comment: 'This is a test', output: req.params.header
//     });
//     //built in helpers such as if statemtns loops
// });


module.exports = router;
