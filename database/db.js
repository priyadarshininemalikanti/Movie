const mongoose = require('mongoose');


const connection = async (username, password) =>{
   
    const URL = `mongodb+srv://${username}:${password}@cluster0.vbu5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Database Connected Successfully")
    }
    catch(error){
        console.log('Error', error.message);
    }
}
 
module.exports = connection;