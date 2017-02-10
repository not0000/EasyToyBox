    (function ($) {
        $.fn.addLinkFileDesctiption = function () {
            var domObject = this;
            var subfilenameArray = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "csv", "xml", "txt", "odt", "ods", "odp", "odg", "zip", "mp3", "wma", "ogg", "mp4", "avi"];
            var avoidhref = "javascript:";

            for (i = 0; i < domObject.length; i++) {
                var str = domObject[i].getAttribute("href");
                var filename = str.substring(str.lastIndexOf("/") + 1, str.length);
                if (str.lastIndexOf(".") != -1 && filename.indexOf(avoidhref)==-1) {
                    var subfilename = str.substring(str.lastIndexOf(".") + 1, str.length);
                    for (var key in subfilenameArray) {
                        if (filename.indexOf(subfilenameArray[key]) != -1) {
                            domObject[i].innerHTML += "(" + subfilename + ")";
                        }
                    }
                }
            }
        }
    })(jQuery)

    $('.about_author a').addLinkFileDesctiption();
