    //===假文產生器===
    try {
        var x = document.getElementsByClassName("lorem");
    } catch (ex) {
        var x = document.querySelectorAll('.lorem');
    }
    for (var i = 0; i < x.length; i++) {
        var font = ["壹", "貳", "叄", "肆", "伍", "陸", "柒", "捌", "玖", "，"];
        var paraNumber = 50;
        for (var y = 0; y < paraNumber; y++) {
            var para = document.createElement("p");
            //取得長字串內容;
            var longfont = "";
            var textlength = Math.floor(Math.random() * 300);
            for (var z = 0; z < textlength; z++) { longfont += font[getRandom0to9()]; }

            var node = document.createTextNode(longfont);
            para.appendChild(node);
            x[i].appendChild(para);
        }
    }
    function getRandom0to9() {
        var number = Math.floor(Math.random() * 10);
        return number;
    }
