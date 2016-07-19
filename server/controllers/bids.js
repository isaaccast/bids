var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');
module.exports = {
  index: function(req,res){
    Question.find({}, function(err, questions){
      if(err){
        console.log('couldnt find all questions');
      }else{
        res.json(questions);
      }
    })
	  },
  add: function(req, res){
    console.log(req.body);
    var bid = new Bid(req.body);
    bid.save(function(err){
      if(err){
        res.json({status:false});
      }else{
        res.json({status:true});
      }
    })
  },
  findOne: function(req, res){
    console.log(req.body);
    Question.findOne({_id:req.body.id}, function(err, response){
      if(err){
        res.send('can not find question');
      }else{
        res.json(response);
      }
    })
  },
  find1: function(req, res){
    Bid.find({product:1}, function(err, bids){
      if(err){
        console.log('couldnt find all bids');
      }else{
        res.json(bids);
      }
    })

  },
  find2: function(req, res){
    Bid.find({product:2}, function(err, bids){
      if(err){
        console.log('couldnt find all bids');
      }else{
        res.json(bids);
      }
    })

  },
  find3: function(req, res){
    Bid.find({product:3}, function(err, bids){
      if(err){
        console.log('couldnt find all bids');
      }else{
        res.json(bids);
      }
    })

  },
  high1: function(req, res){
    Bid.find({product:1}, function(err, result){
      if(err){
        console.log('couldnt find highest bid');
      }else{
        res.json(result[0])
      }
    }).sort({amount: -1}).limit(1)
  },
  high2: function(req, res){
    Bid.find({product:2}, function(err, result){
      if(err){
        console.log('couldnt find highest bid');
      }else{
        res.json(result[0])
      }
    }).sort({amount: -1}).limit(1)
  },
  high3: function(req, res){
    Bid.find({product:3}, function(err, result){
      if(err){
        console.log('couldnt find highest bid');
      }else{
        res.json(result[0])
      }
    }).sort({amount: -1}).limit(1)
  },
  clearAll: function(req, res){
    Bid.remove({}, function(err){
      if(err){
        res.json({status:false});
      }else{
        res.json({status:true});
      }
    })
  }

}
