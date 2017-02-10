    //西元年轉民國年呼叫語法
    //後面帶數字1=只顯示年份、2只顯示月份、3只顯示日期，未輸入顯示年月日和時間
    try {
        var WestToChinese = document.getElementsByClassName("WestToChinese");
    } catch (ex) {
        var WestToChinese = document.querySelectorAll('.WestToChinese');
    }
    for (var i = 0; i < WestToChinese.length; i++) {
        WestToChinese[i].innerHTML = convertFromWesternToChinse($.trim(WestToChinese[i].innerHTML));
    }
    
//西元年轉民國年
function convertFromWesternToChinse(western, prop) {
    //來源可支援以下兩種
    //2/3/2016 1:24:44 PM
    //2016/02/03 下午 16:23:27
    //轉出可以匯出5種選項
    // 1:年份 2:月份 3:日期 4:年/月/日  5:年/月/日 時間
    //=================================================
    //使用範例
    //convertFromWesternToChinse(western,1) ：只轉出年份
    //=================================================


    var IsAmPm = western.substring(western.length - 1, western.length);
    if (IsAmPm == "M") {
        var YMD = western.split(" ", 3);
        var YMD2 = (YMD[0].split("/", 3));
        var Taiwan_year = leftPad(parseInt(YMD2[2]) - 1911, 3);
        var Taiwan_month = leftPad(YMD2[0], 2);
        var Taiwan_day = leftPad(YMD2[1], 2);
        switch (YMD[2]) {
            case "AM":
                YMD[2]="上午";
                break;
            case "PM":
                YMD[2] = "下午";
                break;
        }
        var Taiwan_time = YMD[2]+YMD[1];

    } else {
        var YMD = western.split(" ", 3);
        var YMD2 = (YMD[0].split("/", 3));
        var Taiwan_year = leftPad(parseInt(YMD2[0]) - 1911, 3);
        var Taiwan_month = leftPad(YMD2[1], 2);
        var Taiwan_day = leftPad(YMD2[2], 2);
        var Taiwan_time = YMD[2];
    }
    switch (prop) {

        case 1:
            return Taiwan_year;
            break;
        case 2:
            return Taiwan_month;
            break;
        case 3:
            return Taiwan_day;
            break;
        case 4:
            return Taiwan_year + "-" + Taiwan_month + "-" + Taiwan_day;
            break;
        default:
            return Taiwan_year + "-" + Taiwan_month + "-" + Taiwan_day + " " + Taiwan_time;
            break;
    }

}

//若未滿位，左邊補0  
function leftPad(val, length) {
    var str = '' + val;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
