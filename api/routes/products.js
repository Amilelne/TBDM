const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var mongoUriBuilder = require('mongo-uri-builder');
var connectionString = mongoUriBuilder({
  username: encodeURIComponent('tbdm'),
  password: encodeURIComponent('whexMSxlP0s74w^^'),
  host:'59.77.7.43',
  port: 6688,
  database:'tbdm'
});

MongoClient.connect(connectionString,function(err,db){
  if(err) throw err;
  var dbo = db.db("tbdm");
  dbo.collection("ju_detail").find({'_id':ObjectId('5a1ecc09d9c6dce150471e89')}).project({"_id":1}).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    db.close;
  })
})

router.get('/', (req, res, next) => {
  MongoClient.connect(connectionString,function(err,db){
    if(err) throw err;
    var dbo = db.db("tbdm");
    dbo.collection("ju_detail").find({}).limit(1000).project({'_id':1, 'item_id':1, 'timestamp':1, 'title':1, 'ju_price':1}).toArray(function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json({
        result: result
      });
      db.close;
    })
  })
});
router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(200).json({
    message: 'handling POST request to /products',
    product: product
  });
});
router.get('/:itemId', (req, res, next) => {
  const id = req.params.itemId;
  MongoClient.connect(connectionString,function(err,db){
    if(err) throw err;
    var dbo = db.db("tbdm");
    dbo.collection("ju_detail").createIndex({'item_id':1},{unique: true});
    dbo.collection("ju_detail").find({'item_id':id}).toArray(function(err,result){
      if(err) throw err;
      console.log(result);
      res.status(200).json({
        result: result
      });
      db.close;
    })
  })
})

module.exports = router;
