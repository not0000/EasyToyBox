//友善列印，自動抓列印頁面有用到的css
function printScreen(printlist) {
    var Rawlinkrel = document.getElementsByTagName("link");
    var CombineLinkrel = "";
    for (var i = 0; i < Rawlinkrel.length; i++) {
        CombineLinkrel += String(Rawlinkrel[i].outerHTML);
    }
    var value = document.getElementById(printlist).innerHTML;
    console.log(CombineLinkrel);

    var printPage = window.open("", "printPage", "");
    printPage.document.open();
    printPage.document.write("<HTML><head></head><BODY onload='window.print();window.close()'>");

    printPage.document.write(CombineLinkrel);
    printPage.document.write("<link href='/css/print.css' rel='stylesheet'>");

    printPage.document.write(value);
    printPage.document.close("</BODY></HTML>");
}
