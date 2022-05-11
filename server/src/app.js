const express=require("express");
const cors=require("cors");
const path=require("path");
const morgan=require("morgan");
const app=express();
const api=require("./routes/api");
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname,"..","public")));
app.use("/v1",api);
app.get("/*",function(req,res){
    res.sendFile(path.join(__dirname,"..","public","index.html"))
});

module.exports=app;