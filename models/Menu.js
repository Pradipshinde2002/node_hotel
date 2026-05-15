const mongoose=require('mongoose')

const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        required:true
    }
    ,is_drink:{
        type:Boolean,
        required:true
    },
    ingredients:{
        type:String,
        enum:["chicken wings","spices","sauce"],
        required:true
    },
    num_sales:{
        type:Number,
        required:true
    }
})

const Menu=mongoose.model('menu',menuItemSchema)
module.exports=Menu