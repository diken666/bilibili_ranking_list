const express = require('express');
const router =  express.Router();
const https = require('https');

router.get('/',(req,res)=>{
    let url = "";
    res.render('search',{});
    // httpsGet(url,(data)=>{
    //     res.render('search',{});
    // });
});

function httpsGet(url,callback){
    https.get(url,(res)=>{
        let result = "";
        res.setEncodeing = "utf8";
        res.on('data',chunk=>{
            result+=chunk;
        });
        res.on('end',()=>{
            callback(JSON.parse(result));
        })
    });
}




module.exports = router;