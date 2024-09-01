
// 現在の日付を取得
const today = new Date();

// 曜日を取得（0: 日曜日, 1: 月曜日, ..., 6: 土曜日）
const dayOfWeek = today.getDay();

// 曜日を日本語に変換するための配列
const days = ['---', '燃えるゴミ', '---', '埋めるゴミ', '燃えるゴミ', 'プラスチックゴミ', '---'];

// 曜日をHTMLに表示するための関数
function displayWeekdays() {
    document.getElementById('day0').textContent = days[dayOfWeek];
    document.getElementById('day1').textContent = days[(dayOfWeek + 1) % 7];
    document.getElementById('day2').textContent = days[(dayOfWeek + 2) % 7];
    document.getElementById('day3').textContent = days[(dayOfWeek + 3) % 7];
    document.getElementById('day4').textContent = days[(dayOfWeek + 4) % 7];
}

// 曜日を表示
displayWeekdays();
