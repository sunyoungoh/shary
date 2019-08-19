var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = require('../models/image');


var BookReviewSchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviewList: {
        type: Schema.Types.ObjectId,
        ref: 'Reviewbook'
    },
    title: String,
    author: String,
    publisher: Date,
    publisher: String,
    pubdate: Date,
    image: String,
    price: String,
    readingStartDate: Date,
    readingEndDate: Date,
    impressivePassage:String,
    review:String,
    tags: String,
    images: [Image.schema],
    rating: Number,     // 별점
    viewCnt: Number,   // 조회수
    like: Number,      // 좋아요 
    liker: {           // 좋아요 누른 사람
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = mongoose.model('BookReview', BookReviewSchema);