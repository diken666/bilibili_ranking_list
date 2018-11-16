const express = require('express');
const router =  express.Router();
const https = require('https');

router.get('/',(req,res,next)=>{
    let url = "https://www.bilibili.com/index/rank/all-3-177.json";
    httpsGet(url,(data)=>{
        res.render('ranking',{msg:data.rank.list,hasClass:["","","","active",""]});
    });
});

function httpsGet(url,callback){
    https.get(url,(res)=>{
        let result = "";
        res.on('data',chunk=>{
            result+=chunk;
        });
        res.on('end',()=>{
            callback(JSON.parse(result));
        })
    });
}




module.exports = router;