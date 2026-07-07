import mongoose, { connect } from "mongoose";

//MongoDB connection

const uri = "mongodb+srv://stanytz953_db_user:r7xwx3sY42uf1dfV@cluster0.qr4vi4m.mongodb.net/?appName=Cluster0";

//connect to mongodb
connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("MongoDB connection error:",err));

export default mongoose;
