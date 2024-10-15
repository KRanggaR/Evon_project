const express=require("express")
const path=require("path")
const app=express()
const hbs=require("hbs")
const collection=require("./mongodb")

const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))


app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{

    const data={
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        postal_code: req.body.postal_code,
        city: req.body.city,
        state: req.body.state
    }

    await collection.insertMany([data])
    res.render("userDetails")
})

app.listen(3000,()=>{
    console.log("port connected");
})