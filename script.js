let saveEl = document.getElementById('save');
let countEl = document.getElementById('counter');
let sumEl = document.getElementById('sum')
let count = 0;
let sum = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    sum+= count;
    sumEl.textContent = sum;
    countEl.textContent = 0;
    count = 0;
}
document.getElementById('increment-btn').addEventListener('click',increment)
document.getElementById('save-btn').addEventListener('click',save)
