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
    trackName: String,
    artistName: String,
    collectionName: String,
    primaryGenreName: String,
    releaseDate: Date,
    listeningDate: Date,
    image: String,
    review: String,
    tags: String,
    rating: Number,      // 별점
    viewCnt: Number,     // 조회수
    like: Number,        // 좋아요 
    liker: {             // 좋아요 누른 사람
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = mongoose.model('BookReview', BookReviewSchema);