const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const crmSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_mobile: {
    type: String,
    required: true,
  },
  user_comments: {
    type: String,
  },
  user_subscribed: {
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true,
});

const crmModel = mongoose.model('crmModel', crmSchema);

module.exports = { crmModel };