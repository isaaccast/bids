var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Name is required!"], minlength: [2, "Name must be at least 2 characters long!"]},
  _bids:[{type: mongoose.Schema.Types.ObjectId, ref:'Bid'}]
}, {timestamps: true});


mongoose.model('User', userSchema);
