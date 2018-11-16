const express = require('express');
const router =  express.Router();
const https = require('https');

router.get('/',(req,res,next)=>{
    let url = "https://api.bilibili.com/x/web-interface/ranking?jsonp=jsonp&rid=0&day=3&type=3&arc_type=0";
    httpsGet(url,(data)=>{
        res.render('ranking',{msg:data.data.list,hasClass:["","","","","active"]});
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