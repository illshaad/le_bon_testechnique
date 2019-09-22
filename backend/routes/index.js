var express = require('express');
var router = express.Router();
const productModel = require('../model/product')


router.get('/products', function(req, res) {
  productModel.find()
  .then(product => {
    res.send(product);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
    });
});
})

router.post("/product", function(req, res) {
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

router.delete('/product/:id', function(req,res){
  var id = req.params.id;
  productModel.findOneAndDelete(id , function(err){
    if(err){
      console.log('erro delete');
      console.log(err);
    }else{
        console.log('delete mongoDb'+ id);
        res.send({message : 'message delete'})
      }
    })
})

router.get('product/:id',function(req,res){
  var id = req.params.id;
  productModel.findOne(id, function(product){
    if(err){
      res.send(err)
    }
    res.send(product)
  })
})


router.put('/product/:id', function(req, res, next) {
  var id = req.params.id;
  productModel.findOne(id ,function(product){
    product.name = req.body.name,
    product.type = req.body.type,
    product.price = req.body.price,
    product.rating = req.body.rating,
    product.available = req.body.available
})
  console.log("saveee");
  productModel.save(function(err, data) {
    if(err){
      res.send(err)
    }
    res.send({ message : 'product update' , data});
  });
});



module.exports = router;
