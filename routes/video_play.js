const express  = require('express');
const router = express.Router();
const https = require('https');

router.get('/',(req,res,next)=>{
    // let videoUrl = "https://api.bilibili.com/x/web-interface/archive/related?aid="+req.query.aid;
    let relatedUrl = "https://api.bilibili.com/x/web-interface/archive/related?aid="+req.query.aid;
    let upSayUrl = "https://api.bilibili.com/x/web-interface/archive/desc?aid="+req.query.aid;
    let tagsUrl = "https://api.bilibili.com/x/tag/archive/tags?aid="+req.query.aid;
    let danmakuUrl = "https://api.bilibili.com/x/v2/reply?pn=1&type=1&oid="+req.query.aid+"&sort=2";
    let videoInfoUrl = "https://api.bilibili.com/x/web-interface/archive/stat?aid="+req.query.aid;
    httpsGet(relatedUrl,(relatedData)=>{
        httpsGet(upSayUrl,(upSaydata)=>{
            httpsGet(tagsUrl,(tagsData)=>{
                httpsGet(danmakuUrl,(danmakuData)=>{
                    httpsGet(videoInfoUrl,(videoData)=>{
                        res.render('video_play',{
                            aid:req.query.aid,
                            title:req.query.title,
                            related: relatedData.data,
                            desc: upSaydata.data,
                            tags: tagsData.data,
                            danmaku: danmakuData.data,
                            videoData: videoData.data
                        })
                    })
                })
            });
        });
    });

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