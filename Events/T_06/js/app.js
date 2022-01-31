document.querySelectorAll('.box').forEach(function (element){

    element.addEventListener('click', function (event) {
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
});