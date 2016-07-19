var mongoose = require('mongoose');
var bidSchema = new mongoose.Schema({
  amount: {type:Number, required:true},
  product:{type:Number, required:true},
  user:{type:String, required: true}
}, { timestamps: true });
mongoose.model('Bid', bidSchema);
