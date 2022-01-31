document.querySelector('#box').addEventListener('mousemove', function(event) {


    document.querySelector('#globalX').innerText = event.clientX + 'px';
    document.querySelector('#globalY').innerText = event.clientY + 'px';
    document.querySelector('#localX').innerText = event.offsetX + 'px';
    document.querySelector('#localY').innerText = event.offsetY + 'px';

})