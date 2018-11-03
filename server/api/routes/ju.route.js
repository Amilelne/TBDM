const express = require('express');
const router = express.Router();
const { JuDetail } = require('../../models/ju_detail');
const { conf } = require('../../config');
const mongoose = require('mongoose');

const pageCount = Number(conf('display.pageCount'));

router.get('/', (req, res, next) => {
  JuDetail.find({}, { error: 0 }, (err, jus) => {
    if (err) console.log(err);
    res.end(JSON.stringify(jus));
  });
});

// router.get('/page/:pageId', (req, res, next) => {
//   const pageId = Number(req.params.pageId);
//   JuDetail.find({}, { error: 0 }, (err, jus) => {
//     if (err) console.log(err);
//     res.end(
//       JSON.stringify(jus.slice(pageId * pageCount, (pageId + 1) * pageCount))
//     );
//   });
// });

router.get('/ju/:juId', (req, res, next) => {
  const juId = String(req.params.juId);
  JuDetail.find({ ju_id: juId }, { error: 0 }, (err, jus) => {
    if (err) console.log(err);
    res.end(JSON.stringify(jus));
  });
});
router.get('/item/:itemId', (req, res, next) => {
  const itemId = String(req.params.itemId);
  JuDetail.find({ item_id: itemId }, { error: 0 }, (err, jus) => {
    if (err) console.log(err);
    res.end(JSON.stringify(jus));
  });
});

router.get('/id/:Id', (req, res, next) => {
  const Id = req.params.Id;
  JuDetail.findById(Id, { error: 0 }, (err, ju) => {
    if (err) console.log(err);
    res.end(JSON.stringify(ju));
  });
});

module.exports = router;
