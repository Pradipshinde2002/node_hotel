const express=require('express')
const router=express.Router()

const Menu = require('../models/Menu')


//menu Schema
router.post('/', async (req, res) => {
    try {
        const menuData = req.body

        newMenu = new Menu(menuData)
        const menuResponse = await newMenu.save()
        console.log("save posted", menuResponse)
        res.status(200).json(menuResponse)

    } catch (err) {
        console.log("internal server error", err)
        res.status(500).json({ error: "internal server error" })
    }
})

router.get('/', async (req, res) => {
    try {
        const menuRes = await Menu.find()
        res.status(200).json(menuRes)
    }
    catch (err) {
        console.log("internal server error")
        res.status(500).json({ error: "internal server error" })
    }

})

router.get('/:ingredient',async(req,res)=>{
    try{
        const ingredient=req.params.ingredient
        if(ingredient=="chicken wings" ||ingredient=="spices" ||ingredient=="sauce"){
            const ingreRes= await Menu.find({ingredients:ingredient})
            console.log(ingreRes)
            res.status(200).json(ingreRes)

        }else{
            console.log("ingredients not found")
        }

    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})
    }

})

//update menu

router.put('/:id',async(req,res)=>{
    try{
        const menuId=req.params.id
        const newMenudata=req.body

        const response=await Menu.findByIdAndUpdate(menuId,newMenudata,{
            new:true,
            runValidators:true
        })

        if(!response){
            return res.status(404).json({error:"menu not found"})}

        console.log("menu updated")
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})

    }
})

//delete person

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id

        const response= await Menu.findByIdAndDelete(personId)

        if(!response){
            return res.status(404).json({error:"menu not found"})}

        console.log("deleted succefully")
        res.status(200).json({message:"menu deleted successfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})

    }
})

module.exports=router