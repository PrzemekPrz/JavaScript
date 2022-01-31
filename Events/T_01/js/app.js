const buttons = document.querySelectorAll('a');
console.log(buttons)

const content1 = document.querySelectorAll('.content')[0];
const content2 = document.querySelectorAll('.content')[1];
console.log(document.querySelectorAll('.content'))


buttons[0].addEventListener('click', function(event) {
    content1.classList.toggle('d-none');
});

buttons[1].addEventListener('mouseover', function(event) {
    content2.classList.remove('d-none');
})