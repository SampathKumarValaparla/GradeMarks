const express = require("express")
const app = express();
const mongoose = require("mongoose")
const postRoute = require("./route1")



// middleware
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/SamSanJyo",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("database is connected");
})
.catch((err) => console.log(err));

app.use("/api/posts", postRoute)



app.listen(5000,() => console.log(`server is running in ${5000} `));
