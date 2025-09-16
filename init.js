const mongoose = require("mongoose");
const Chat= require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
    from: "neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at: new Date(),
},

{
    from: "saniya",
    to:"rohit",
    msg:"explain me this topic",
    created_at: new Date(),
},

{
    from: "neha",
    to:"shanaya",
    msg:"send me your notes",
    created_at: new Date(),
},

{
    from: "naira",
    to:"gayu",
    msg:"all the best! for your exam",
    created_at: new Date(),
},
];

Chat.insertMany(allchats);