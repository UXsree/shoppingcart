var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var product = [
  new Product({
  imagePath: 'images/chinmayi.jpg',
  title: 'Chinmayee',
  description: 'Gel pen portraits',
  price: 200
}),
new Product({
  imagePath: 'images/chinmayi.jpg',
  title: 'Chinmayee',
  description: 'Gel pen portraits',
  price: 200
})
];

var done=0;
for(var i=0; i < product.length; i++){
  product[i].save(function(err,result){
    done++;
    if(done===product.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}



