const { Schema, model }= require('mongoose');

const CommentSchema = new Schema({
    writtenBy:{
        type:String
    },
    CommentBody: {
        type:String
    },
    CreateAt: {
        type: Date,
        default:Date.now
    }
});

const Comment = model('Comment', CommentSchema);

model.exports = Comment;