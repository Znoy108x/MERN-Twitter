const mongoose = require("mongoose")
const db_name = "Twitter"
const mongoose_url = `mongodb+srv://abhay:abhay@cluster0.i8prg.mongodb.net/${db_name}?retryWrites=true&w=majority`
const connectToMongoose = () =>{
    mongoose.connect(mongoose_url , () =>{
        console.log(`Connected to the ${db_name}`.rainbow)
    })
}
module.exports =  connectToMongoose