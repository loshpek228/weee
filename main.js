

// let time = document.getElementById('time')
// let count = document.getElementById('count')
// let start = document.getElementById('start')
// let countPersrcond = document.getElementById('count-per-second')
// let restart = document.getElementById('restart')


// let i = 0 ;
// let interval;
// let timeout;
// let timeValue = time.value;

// time.onchange = (event) =>{
//     timeValue = event.target.value;
//     if(timeValue < 5){
//         timeValue = 5;
//         time.value = 5;
//     }else if(timeValue > 15){
//         timeValue = 15;
//         time.value = 15;
//     }
// }


// start.onclick = () =>{
//     i++;
//     count.textContent = i;
//     time.disabled = true
//     if (i==1) {
//         interval = setInterval(()=>{
//             time.value--
//         },1000);
//         timeout = setInterval(()=>{
//             clearInterval(interval);
//             start.disabled = true;
//             countPersrcond.textContent = i / timeValue;
//         },timeValue * 1000)
//     }
// }

// restart.onclick = ()=>{
//     clearTimeout(timeout)
//     clearInterval(interval)
//     i = 0;
//     count.textContent = 0;
//     countPersrcond.textContent = 0;
//     time.value = 10 ;
//     start.disabled = false
//     timeValue = 10;
//     time.disabled = false 
// }












const time = document.getElementById('time');
const count = document.getElementById('count');
const start = document.getElementById('start');
const countPerSecond = document.getElementById('count-per-second');
const restart = document.getElementById('restart');
const record = document.getElementById('record');
const playerInput = document.getElementById('player-name');
const addRecordBtn = document.getElementById('add-record');
const incrementCountBtn = document.getElementById('increment-count');

let interval;
let timeout;
let i = 0;
let maxCount = 0; // Максимальный счет
let playerRecords = {}; // Объект для хранения рекордов игроков
let timeValue = parseInt(time.value);

time.onchange = (event) => {
    timeValue = parseInt(event.target.value);
    if (timeValue < 5) {
        timeValue = 5;
        time.value = 5;
    } else if (timeValue > 15) {
        timeValue = 15;
        time.value = 15;
    }
};

start.onclick = () => {
    if (interval) return; // Если таймер уже запущен, игнорировать повторное нажатие
    i++;
    count.textContent = i;
    time.disabled = true;
    interval = setInterval(() => {
        time.value--;
    }, 1000);
    timeout = setTimeout(() => {
        clearInterval(interval);
        start.disabled = true;
        if (i > maxCount) {
            maxCount = i;
            record.textContent = maxCount;
        }
        countPerSecond.textContent = i / timeValue;
    }, timeValue * 1000);
};

restart.onclick = () => {
    clearInterval(interval);
    clearTimeout(timeout);
    interval = null;
    i = 0;
    count.textContent = 0;
    countPerSecond.textContent = 0;
    time.value = 10;
    time.disabled = false;
    start.disabled = false;
};

addRecordBtn.onclick = () => {
    const playerName = playerInput.value.trim();
    if (!playerName) return; // Проверяем, что имя игрока не пустое
    if (!playerRecords[playerName] || i > playerRecords[playerName]) {
        playerRecords[playerName] = i;
        alert(`Рекорд игрока ${playerName} обновлен: ${i}`);
    } else {
        alert(`Рекорд игрока ${playerName} не обновлен, текущий рекорд: ${playerRecords[playerName]}`);
    }
};

incrementCountBtn.onclick = () => {
    i++;
    count.textContent = i;
};


