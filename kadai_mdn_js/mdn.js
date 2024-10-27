// 定数　today に　今日の日時を代入
const today = new Date();

// 変数year に today より　'年' を代入
let year = today.getFullYear();
year = String(year);

// 　変数month に　today　より'日'を代入
let month = today.getMonth() + 1;
month = String(month);


// 　変数date　に　today　より '日'　を代入
let date = today.getDate();
date = String(date);


// year month dateより文字列として出力
console.log(year + '年' + month + '月' +  date + '日');
