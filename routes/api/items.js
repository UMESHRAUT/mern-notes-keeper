const express=require('express');
const router= express.Router();

const Item=require('../../models/Items')

router.get('/',(req,res)=>{
    Item.find().sort({date:-1}).then(items=>res.json(items));
})


router.post('/',(req,res)=>{
    const newItem=new Item({
        title:req.body.title,
        description:req.body.description,
    })
    newItem.save().then(item=>res.json(item))
})



router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({sucess:true})))
        .catch((error=>res.status(404).json({sucess:false})))
})
module.exports=router;