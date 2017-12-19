$(function(){
    //搜索菜单
    $(".seach-selet").hover(function(){
        //$(this).find("span").text();
        $(".seach-list").show();
    },function(){
        $(".seach-list").hide();
    });
    $(".seach-list li").click(function(){
        $("#seach_val").text($(this).text());

    })
    //语言选择
    $(".lang").hover(function(){
        $(this).find("ul").show();
    },function(){
        $(this).find("ul").hide();
    });
    //二级菜单
    $(".menu-bom li").hover(function(){
        $(this).find("ul").show();
    },function(){
        $(this).find("ul").hide();
    });

    //浮动工具条

    $(".tickswp").hover(
        function() {
            $(this).stop().animate({left:"-120px"});
            $(this).find(".tip-ico1").css("backgroundColor","#a62319");
        },
        function() {
            $(this).stop().animate({left:"0px"});
            $(this).find(".tip-ico1").css("backgroundColor","#515d62");
        });
    $(".sharewp").hover(
        function() {
            $(this).stop().animate({left:"-140px"});
            $(this).find(".tip-ico2").css("backgroundColor","#a62319");
        },
        function() {
            $(this).stop().animate({left:"0px"});
            $(this).find(".tip-ico2").css("backgroundColor","#515d62");
        });
    $(".w2wp").hover(
        function() {
            $(".w2img").stop().animate({left:"-131px"});
            $(".w2wp").find(".tip-ico3").css("backgroundColor","#a62319");
        },
        function() {
            $(".w2img").stop().animate({left:"81px"});
            $(".w2wp").find(".tip-ico3").css("backgroundColor","#515d62");
        });
    $(".tipseachwp").hover(
        function() {
            $(".tipseach").stop().animate({left:"-244px"});
            $(".tipseachwp").find(".tip-ico4").css("backgroundColor","#a62319");
        },
        function() {
            $(".tipseach").stop().animate({left:"81px"});
            $(".tipseachwp").find(".tip-ico4").css("backgroundColor","#515d62");
        });
    $(".helpwp").hover(
        function() {
            $(this).stop().animate({left:"-142px"});
            $(this).find(".tip-ico5").css("backgroundColor","#a62319");
        },
        function() {
            $(this).stop().animate({left:"0px"});
            $(this).find(".tip-ico5").css("backgroundColor","#515d62");
        });
    $(".messgwp").hover(
        function() {
            $(this).stop().animate({left:"-142px"});
            $(this).find(".tip-ico6").css("backgroundColor","#a62319");
        },
        function() {
            $(this).stop().animate({left:"0px"});
            $(this).find(".tip-ico6").css("backgroundColor","#515d62");
        });
    $(".gototop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
})
