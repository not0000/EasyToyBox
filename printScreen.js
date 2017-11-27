function printScreen(printlist) {
    var Rawlinkrel = document.querySelectorAll("link,style");
    var CombineLinkrel = "";
    for (var i = 0; i < Rawlinkrel.length; i++) {
        CombineLinkrel += String(Rawlinkrel[i].outerHTML);
    }
	
    var value = document.getElementById(printlist).innerHTML;
    var printPage = window.open("", "printPage", "");
    printPage.document.open();
    printPage.document.write("<HTML><head></head><BODY onload='window.print();window.close()'>");

    printPage.document.write(CombineLinkrel);
    printPage.document.write("<link href='print.css' rel='stylesheet'>");
    printPage.document.write("<div id='"+printlist+"'>");
    printPage.document.write(value);
    printPage.document.write("</div>");

    printPage.document.close("</BODY></HTML>");
}