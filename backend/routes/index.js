var express = require('express');
var router = express.Router();
const productModel = require('../model/product')

router.get('/products', function(req, res, next) {
  productModel.find()
  .then(product => {
    res.send(product);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
    });
});
})

router.post("/product", function(req, res, next) {
  console.log("test", req.body);
  var product = new productModel({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    rating: req.body.rating,
    warranty_years : req.body.years,
    available: req.body.available
  });
  console.log("saveeee");
  product.save(function(err, data) {
    if(err){
      res.send(err)
    }
    res.json({ result: true, data });
  });
});

router.get('/product/:id',function(req,res){
  productModel.findOne({_id : req.params.id}, function(err,product){
    if(err){
      res.send(err)
    }
    res.send(product)
  })
})

router.delete('/product/:id', function(req,res){
  productModel.remove({_id : req.params.id},function(err, data){
    if(err){
      res.send(err)
    }
    console.log('deleteddddddddddddd')
    res.send({ message : 'products delete'})
    console.log('out of the function')
  })
})


router.put("/product/:id", function(req, res, next) {
  console.log("test", req.body);
  productModel.findOne({_id : req.params.id}, function(err,product){
    product.name = req.body.name,
    product.type = req.body.type,
    product.price = req.body.price,
    product.rating = req.body.rating,
    product.available = req.body.available
})
  console.log("saveee");
  product.save(function(err, data) {
    if(err){
      res.send(err)
    }
    res.json({ result: true, data });
  });
});



module.exports = router;
