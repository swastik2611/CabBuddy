// import { registerRootComponent } from 'expo';
// import App from './App';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);

const express = require('express')
const bodyparser = require('body-parser')
const app=express();
const mongoose = require('mongoose')
const PORT=3000
const {mongoUrl}=require('./models/key')

require('./models/User')
const authRoutes = require('./routes/authRoutes')
app.use(bodyparser.json());

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo"); 
});
mongoose.connection.on('error',(err)=>{
    console.log("error",err); 
});
app.use(bodyparser.json());

app.post('/signup',(req,res)=>{
    console.log(req.body);
    res.send("ok");
});

// app.get('/',(req,res)=>{
//     res.send("hello world");
// });

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
});