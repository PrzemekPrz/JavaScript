const buttons = document.querySelectorAll('.btn');
const count = document.querySelector('span');

buttons.forEach(function (element){
    element.addEventListener('click',function (event){
        count.innerText++;
    });
});