/**
 * Created by jeffrey.zhong on 2016/10/25.
 */
'user strict';

var calendar = require('../api/calendar');

/*
 * 是否闰年
 */
function isLeapYear (year) {
    var res;
    return (year % 100 === 0 ? res = (year % 400 === 0 ? 1 : 0) : res = (year % 4 === 0 ? 1 : 0))
}

/*
 * 月份第一天 星期几
 */
function getFirstDayArr (year) {
    var arr = [];
    for ( var mouth = 1; mouth <= 12; mouth++ ) {
        day = new Date(year, mouth - 1, 1).getDay();
        arr.push(day);
    }
    
    return arr;
}

var picUrlArr = [];

for ( var c = 1; c <= 12; c++ ) {
    picUrlArr.push('images/c' + c + '.png');
}

var Calendar = function (year) {
    var firstDayArr = getFirstDayArr(year),
        dayOfMouthArr = [31, 28 + isLeapYear(year), 31, 30, 31, 31, 30, 31, 30, 31, 30, 31],
        resArr = [], 
        date = new Date(), 
        currentMouth = date.getMonth(), 
        currentYear = date.getFullYear(), 
        currentDate = date.getDate();
    for ( var m = 0; m < 12; ++m ) {
        var tempArr = [],
            kLen = firstDayArr[m], dLen = dayOfMouthArr[m],
            replenishLen = 7 - (kLen + dLen) % 7;
        replenishLen = (replenishLen == 7 ? 0 : replenishLen);
        for ( var k = 0; k < kLen; k++ ) {// head blank fill
            tempArr.push(' ');
        }
        for ( var d = 0; d < dLen; ) {
            ++d;// which days in the first day of this mouth
            var data = calendar.getDataDefinite('mi', year, (m+1), d);
            tempArr.push({
                day: d,
                data: data
            });
        }
        for ( var l = 0; l < replenishLen; l++ ) {// foot blank fill
            tempArr.push(' ');
        }
        resArr.push(tempArr);
    }
    return {
        resArr: resArr,
        weekOrderArr: ['日', '一', '二', '三', '四', '五', '六'],
        picUrlArr: picUrlArr,
        currentMouth: currentMouth,
        currentYear: currentYear,
        currentDate: currentDate,
        paramsYear: year
    }
};

module.exports = Calendar;