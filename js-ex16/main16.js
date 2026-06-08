'use strict';

const date = document.getElementById('get-date');
console.log(date);

date.addEventListener('click', () => {
    const now = new Date();
    const year = now.getFullYear(); 
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dayOfWeek = now.getDay();
    const dateString = `今日は、${year}年${month}月${day}日 、${getDayName(dayOfWeek)} です・`;
    document.getElementById('date').textContent = dateString;
});

function getDayName(day) {
    const days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
    return days[day];
}