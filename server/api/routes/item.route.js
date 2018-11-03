const express = require('express');
const router = express.Router();
const { ItemDetail } = require('../../models/item_detail');
const { conf } = require('../../config');
const mongoose = require('mongoose');

const pageCount = Number(conf('display.pageCount'));

router.get('/', (req, res, next) => {
  ItemDetail.find({}, { error: 0 }, (err, items) => {
    if (err) console.log(err);
    res.end(JSON.stringify(items));
  });
});

// router.get('/page/:pageId', (req, res, next) => {
//   const pageId = Number(req.params.pageId);
//   ItemDetail.find(
//     {},
//     { error: 0 },
//     { array: { $slice: (pageId * pageCount, (pageId + 1) * pageCount) } },
//     (err, items) => {
//       if (err) console.log(err);
//       // JSON.stringify(items.slice(pageId * pageCount, (pageId + 1) * pageCount))
//       res.end(JSON.stringify(items));
//     }
//   );
// });

router.get('/item/:itemId', (req, res, next) => {
  const itemId = String(req.params.itemId);
  ItemDetail.find({ item_id: itemId }, { error: 0 }, (err, items) => {
    if (err) console.log(err);
    res.end(JSON.stringify(items));
  });
});
router.get('/id/:Id', (req, res, next) => {
  const Id = req.params.Id;
  ItemDetail.findById(Id, { error: 0 }, (err, item) => {
    if (err) console.log(err);
    res.end(JSON.stringify(item));
  });
});

module.exports = router;
