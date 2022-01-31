document.querySelectorAll('.btn-block').forEach(function(a) {
    a.addEventListener('click', function(event) {
        this.remove();
    })
})

//const btn = document.querySelector('.btn');
    //btn.addEventListener('click', function(event) {
        //this.remove();
    //});