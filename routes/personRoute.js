const express=require('express')
const router=express.Router()
const Person = require('../models/Person')

router.post('/', async (req, res) => {
    try {
        const data = req.body

        const newPerson = new Person(data)
        const response = await newPerson.save()
        console.log("data saved")
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })

    }
})


router.get('/', async (req, res) => {
    try {
        const data = await Person.find()
        console.log(data)
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })

    }
})

//parameterised API

router.get('/:workType', async (req, res) => {


    try {
        const workType = req.params.workType
        if (workType == 'chef' || workType == "manager" || workType == "waiter") {
            const workRes = await Person.find({ work: workType })
            console.log("worker data fetched")
            res.status(200).json(workRes)

        }else{
            console.log(err)
            
            res.status(404).json({error:"work type not found"})
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })


    }
})


//update user
router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id
        const updatedPerson=req.body

        const response= await Person.findByIdAndUpdate(personId,updatedPerson,{
            new:true,
            runValidators:true

        
        })
        if(!response){
            return res.status(404).json({error:"person not found"})
        }

        console.log("person data updated")
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})

    }
})


module.exports=router