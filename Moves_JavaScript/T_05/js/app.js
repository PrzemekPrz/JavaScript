const deleteButton = document.querySelector('#remove');
const list = document.querySelector('#list');

deleteButton.addEventListener('click', function() {


    // sposób 1
    while(list.firstElementChild != null) {
        list.firstElementChild.remove();
    }

    // sposób 2
    // x.children - nie ma forEach
    // konwertujemy pseudotablicę "children" do prawdziwej tablicy
    Array.from(list.children).forEach(function(li) { li.remove(); });

    // sposób 3
    list.querySelectorAll('li').forEach(function(li) { li.remove(); });

});