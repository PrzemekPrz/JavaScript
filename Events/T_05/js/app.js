const button1 = document.querySelectorAll('.btn')[0];
const button2 = document.querySelectorAll('.btn')[1];
const button3 = document.querySelectorAll('.btn')[2];
const count1 = document.querySelectorAll('span')[0];
const count2 = document.querySelectorAll('span')[1];
const count3 = document.querySelectorAll('span')[2];
button1.addEventListener('click',function (event) { count1.innerText++; });
button2.addEventListener('click',function (event) { count2.innerText++; });
button3.addEventListener('click',function (event) { count3.innerText++; });

