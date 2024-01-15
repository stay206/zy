// 标题左移
$(function(){
    $(".leftmove").hover(function(){
        $(this).stop().animate({paddingLeft:'10px'});
    },function(){
        $(this).stop().animate({paddingLeft:'0px'});
    }); 

})
// 标题右移
$(function(){
    $(".top-right").hover(function(){
        $(this).stop().animate({paddingRight:'15px'},500);
    },function(){
        $(this).stop().animate({paddingRight:'0px'},500);
    }); 

})

// 搜索框
$(function(){
    $(".top-con-right5").mouseenter(function(){
        $(".search").css({"display":"block"});
        $("#sou").css({"display":"none"});
    });
    $(".top").mouseleave(function(){
        $(".search").css({"display":"none"});
        $("#sou").css({"display":"block"});
    }); 
    
})