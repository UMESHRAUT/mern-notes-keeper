const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path=require('path')

const items=require('./routes/api/items');

const app=express();

app.use(bodyParser.json());

const db=require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(()=>console.log("mongo db connected"))
    .catch((err)=>console.log(err))


app.use('/api/items',items);

if(process.env.NODE_ENV==="production"){
    app.use(express.static('keeper-app/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'keeper-app','build','index.html'));
    })
}

const port=process.env.port||'5000';

app.listen(port,()=>console.log("server started on port - "+port))