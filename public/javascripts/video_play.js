$(document).ready(function(){
    $("#iframe").hover(()=>{
        $('.board-right').css({opacity:"1",transition:"opacity 0s"});
    },()=>{
        $('.board-right').css({opacity:"0",transition:"opacity 1.5s"});
    });
    if($(".pageNum")){
        var href = window.location.href;
        var page = 1;
        if(href.toString().split('&')[2]){
            page = parseInt(href.split('&')[2].split('=')[1],10);
        }
        $(".pageNum").val(page);
        $(".pageNum").bind('change',function(){
            var pageNum = parseInt($('.pageNum').val());
            if(pageNum <= 0){
                pageNum = 1;
            }
            var temp = decodeURI($("#go").context.URL).split('&')[0]
                +"&" +decodeURI($("#go").context.URL).split('&')[1];
            temp = temp+"&page="+pageNum;
            $('#go').attr('href',encodeURI(temp));
            $('.pageNum').val($('.pageNum').val());
        })
    }
});