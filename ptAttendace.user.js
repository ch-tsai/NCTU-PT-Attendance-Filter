// ==UserScript==
// @name         NCTU-PT-Attendance-Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  過濾兼任差勤及服務管理系統之請核列表，將當月以前的資訊加上刪除線。
// @author       ch-tsai setsal
// @include      https://pt-attendance.nctu.edu.tw/index.php     
// @grant        none
// ==/UserScript==

(function() {
    var date = new Date();
    var day = new Date(date.getFullYear(), date.getMonth(), 1);
    var ptLists = document.getElementsByClassName('border-top border-dark');
    for (var i = 0; i < ptLists.item(0).childNodes.length; i++) {
        var ptDate = ptLists.item(0).childNodes[i].childNodes[14].innerText;
        var ptDay = new Date(ptDate + 'T00:00:00');
        if (day > ptDay) {
            for (var j = 0; j < ptLists.item(0).childNodes[i].childNodes.length; j++) {
                ptLists.item(0).childNodes[i].childNodes[j].innerHTML = '<td class="text-right align-middle"><span style="color:grey;"><del>' + ptLists.item(0).childNodes[i].childNodes[j].innerText + '</del></span></td>';
            }
        }
    }
})();