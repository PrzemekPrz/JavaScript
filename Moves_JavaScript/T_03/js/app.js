document.getElementById('add').addEventListener('click', function(event) {

    const ul = document.getElementById('menu');

    const newLi = document.createElement('li');
    newLi.innerText = `Element ${ul.children.length + 1} - w chwili dodania było ${ul.children.length} elementów`;  // dokończyć
    newLi.classList.add('list-group-item');

    ul.appendChild(newLi);
    
});