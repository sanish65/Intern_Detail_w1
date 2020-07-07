const express = require('express');
const router = express.Router();
const { Detail } = require('../models/Detail');
// const { auth } = require("../middleware/auth");


router.post("/uploadDetail",  (req, res) => {

    //save all the data we got from the client into the DB 
    const detail = new Detail(req.body)

    detail.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});



router.get("/viewDetail",(req,res) => {
    Detail.find({})
    .then((products) => {
        res.status(200).json({ success:true,products})
    })
    .catch((err) =>{
        res.status(400).json({success: false,err })

    })
})

// ?id=${productId}&type=single
router.get("/detail_by_Id",  (req, res) => {
    let type = req.query.type
    let productIds=req.query.id

    Detail.find({'_id' : { $in : productIds }})
    .exec((err,product) => {
       if(err) return req.status(400).send(err)
       return res.status(200).send(product)
    })


});




module.exports = router;