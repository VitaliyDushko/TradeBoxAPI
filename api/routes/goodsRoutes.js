'use strict';
module.exports = function(app) {
  var goodsController = require('../controllers/goodsController');

  // todoList Routes
  app.route('/clothes')
    .get(goodsController.list_all_clothes)
    .post(goodsController.create_a_pieceOfClothing);


  app.route('/clothes/:pieceId')
    .get(goodsController.read_a_pieceOfClothing)
    .put(goodsController.update_a_pieceOfClothing)
    .delete(goodsController.delete_a_pieceOfClothing);
};