# NCTU-PT-Attendance-Filter
過濾兼任差勤及服務管理系統之請核列表，將當月以前的資訊加上刪除線。

## 目標
[交大兼任差勤及服務管理系統](https://pt-attendance.nctu.edu.tw/index.php)

## 緣由
舊資料持續累積，眼睛看得 hen 痛。 ಠ_ಠ

## 方法

### 方法一

將下方 Script 新增至書籤，點擊後執行
    
```javascript=!
javascript: (function(){var date = new Date();var day = new Date(date.getFullYear(), date.getMonth(), 1);var ptLists = document.getElementsByClassName('border-top border-dark');for (var i = 0; i < ptLists.item(0).childNodes.length; i++) {var ptDate = ptLists.item(0).childNodes[i].childNodes[14].innerText;var ptDay = new Date(ptDate + 'T00:00:00');if (day > ptDay) {for (var j = 0; j < ptLists.item(0).childNodes[i].childNodes.length; j++) {ptLists.item(0).childNodes[i].childNodes[j].innerHTML = '<td class="text-right align-middle"><span style="color:grey;"><del>' + ptLists.item(0).childNodes[i].childNodes[j].innerText + '</del></span></td>';}}}})()
```

### 方法二

透過腳本管理器自動使用

1. 請根據自己的瀏覽器安裝 Tampermonkey 或 GreaseMonkey

2. [點我安裝](https://github.com/setsal/NCTU-PT-Attendance-Filter/raw/main/ptAttendace.user.js)


## 效果
- Before: ![](https://i.imgur.com/LvQQMTK.jpg)
- After: ![](https://i.imgur.com/Cv2FvYm.jpg)

