const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    trim: true, /*  */
  },
  owner: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  hour: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  symptoms: {
    type: String,
    trim: true,
  }
})

module.exports = mongoose.model('patients', patientSchema);
