const mongoose = require("mongoose")


const userSchema= new mongoose.Schema({
    userSchema:{
        FirstName:String,
        lastname:String,
        userName:String,
        email:String,
        password:String
    },
    MovieSchema:{
        MovieName:String,
        Image:String,
        TicketCost:Number,
        ReleaseDate:Date,
        Rating:String

    },
});

const User = mongoose.model('user',userSchema);

module.exports = User;