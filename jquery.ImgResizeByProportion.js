(function ($) {
    //依照寬度當作基準，計算元素高度，放在resize事件裡呼叫就可以rwd了
    $.fn.ImgResizeByProportion = function (Proportion) {
        wdth = $(window).width();
        imgwidth = $(this).width();
        imgheight = imgwidth * Proportion;
        $(this).css("height", imgheight + "px");
    }
})(jQuery)
