$(document).ready(function(){
    $("#iframe").hover(()=>{
        $('.board-right').css({opacity:"1",transition:"opacity 0s"});
    },()=>{
        $('.board-right').css({opacity:"0",transition:"opacity 1.5s"});
    })
});