$(document).ready(function(){
    $(function(){
        var li = $('.rank-menu li');
        li.each(function(){
            $(this).click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
        })
    })
});