document.querySelectorAll('.deleteBtn').forEach(function(a) {
    a.addEventListener('click', function(event) {
        this.parentElement.parentElement.remove();
    })
})

