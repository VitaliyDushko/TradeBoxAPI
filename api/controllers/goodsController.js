'use strict';


var mongoose = require('mongoose'),
  PieceOfClothing = mongoose.model('Clothes');

var fs = require('fs');

exports.list_all_clothes = function(req, res) {
  PieceOfClothing.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_pieceOfClothing = function(req, res) {
  req.body.img = {};
  req.body.img.data = fs.readFileSync('./uploads/ILTQq.png');
  req.body.img.contentType = 'image/png';
  var new_task = new PieceOfClothing(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_pieceOfClothing = function(req, res) {
  PieceOfClothing.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_pieceOfClothing = function(req, res) {
  PieceOfClothing.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_pieceOfClothing = function(req, res) {


  PieceOfClothing.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


