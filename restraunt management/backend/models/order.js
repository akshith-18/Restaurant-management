const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [String],
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Order', OrderSchema);
