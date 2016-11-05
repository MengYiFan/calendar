/**
 * Created by jeffrey.zhong on 2016/10/25.
 */
define(function(require, exports, module) {
    'user strict';

    /*
     * 是否闰年
     */
    function isLeapYear (year) {
        var res;
        return (year % 100 === 0 ? res = (year % 400 === 0 ? 1 : 0) : res = (year % 4 === 0 ? 1 : 0))
    }

    /*
     * 判断月份是否合理
     */
    function isRightMouth (mouth) {
        var res;
        return (mouth < 1 ? res = 1 : res = (mouth > 12 ? 12 : mouth));
    }

    /*
     * 根据年，月获得天数
     */
    function getDayOfMouth (year, mouth) {
        var mouth = isRightMouth(mouth),
            dayOfMouth = [31, 28 + isLeapYear(year), 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
        return dayOfMouth[mouth-1];
    }
 
    /*
     * 当月第一天是星期几
     */
    function getWhatDay (year, mouth) {
        var mouth = isRightMouth(mouth),
            day = new Date(year, mouth - 1, 1);
        return day.getDay();
    }

    /*
     *  计算行数
     */
    function getRowNumber (days, firstDay) {
        var days = days + firstDay;
        return Math.ceil(days / 7);
    }

    function drawCalendar (year, mouth) {
        var html = '',
            firstDay = getWhatDay(year, mouth),
            days = getDayOfMouth(year, mouth);
        ['日', '一', '二', '三', '四', '五', '六'].forEach(function (e) {
            html += '<div class="calendar-item calendar-title">' + e + '</div>'
        });
        while (firstDay--) {
            html += '<div class="calendar-item calendar-blank"></div>';
        }
        for (var j = 1; j <= days; j++) {
            html += '<div class="calendar-item calendar-value"><span>' + j + '</span></div>'
        }
       return html;
    }

    var Calendar = {
        init: function (opts) {
            var container = document.querySelector(opts.container);
            console.log(opts);
            console.log(drawCalendar(opts.year, opts.mouth));
            container.innerHTML = drawCalendar(opts.year, opts.mouth);
        }
    };

    module.exports = Calendar;
});
