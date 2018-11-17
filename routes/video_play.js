const express  = require('express');
const router = express.Router();
const https = require('https');

router.get('/',(req,res,next)=>{
    let url = "https://api.bilibili.com/x/web-interface/archive/related?aid="+req.query.aid;
    httpsGet(url,(data)=>{
        res.render('video_play',{aid:req.query.aid,title:req.query.title,info:data.data})
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