$(document).ready(function(){
    $(function(){
        var li = $('.rank-menu li');
        li.each(function(){
            $(this).click(function(){
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            })
        })
    })
});