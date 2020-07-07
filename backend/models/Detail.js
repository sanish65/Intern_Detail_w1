const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = mongoose.Schema({
    product:{
        type: String,
        
    },
    description:{
        type: String,
        maxLength: 100
    },
    price:{
        type: Number,
        default: 0
    },
    availability:{
        type:Number,
        default:0
        
    }
  }, { timestamps: true })

const Detail = mongoose.model('Detail', detailSchema);

module.exports = { Detail }