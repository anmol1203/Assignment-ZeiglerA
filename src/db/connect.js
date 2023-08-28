const mongoose = require ("mongoose");

//returning promise method which will give us data in future
mongoose.connect("mongodb+srv://anmolmishra4141:1234567890@cluster0.0syynpq.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true,  //not to get depreciation warning
}).then(()=>{
    console.log(`connection successful`)
}).catch((e)=>{
console.log(`No Connection`)
})