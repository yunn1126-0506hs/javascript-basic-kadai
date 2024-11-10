// btnというidを持つHTML要素を取得し、定数に代入

const btn = document.getElementById('btn');
let chengeTxt = document.getElementById('text');

// HTML要素がクリックされた時にイベント処理を実行する



  btn.addEventListener('click', () => {
    setTimeout(() => {
　    chengeTxt.textContent = 'ボタンをクリックしました'
    }, 2000);
});



