const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

mongoose.connect("mongodb://127.0.0.1:27017/shopApp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNECTION OPEN!!!")
  })
  .catch(err => {
    console.log("ON NO ERROR!!!!")
    console.log(err)
  })
  
  const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
      type: Boolean,
      default: false
    },
    categories: [String],
    qty: {
      online: {
        type: Number,
        default: 0
      },
      inStore: {
        type: Number,
        default: 0
      }
    }

  });

  // const Product = mongoose.model('Product', productSchema);

  // const bike = new Product({ name: 'Tire Pump', price: 19.50, categories: ['Cycling'] })
  // bike.save()
  //   .then(data => {
  //       console.log("IT WORKED!")
  //       console.log(data);
  //   })
  //   .catch(err => {
  //       console.log("OH NO ERROR!")
  //       console.log(err)
  //   })
Product.findOneAndUpdate({ name: 'Tire Pump'}, { price: 100}, { new: true })
    .then(data => {
      console.log("IT WORKED!")
      console.log(data);
  })
  .catch(err => {
      console.log("OH NO ERROR!")
      console.log(err)
  })