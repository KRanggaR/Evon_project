const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const signupschema=new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true 
    },
    address: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
})

const signupcollection=new mongoose.model("signupcollection",signupschema)

module.exports=signupcollection