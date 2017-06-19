//依照寬度當作基準，計算元素高度，放在resize事件裡就可以rwd了
(function ($) {
    $.fn.ImgResizeByProportion = function (TagClass, Proportion) {

        wdth = $(window).width();
        var mediaquery = [320, 480, 768, 992, 1200];
        if (mediaquery.contain(wdth) != -1) {
            imgwidth = $(TagClass).width();
            imgheight = imgwidth * Proportion;
            $(TagClass).css("height", imgheight + "px");
        }
    }
})(jQuery)
