document.querySelectorAll('.parent').forEach(function(divParent) {


    divParent.addEventListener('mouseover', function (event) {
        const divParent = event.currentTarget;
        const divChild = divParent.querySelector('div.children');

        divChild.style.display = 'block';
    });

    divParent.addEventListener('mouseleave', function (event) {
        const divParent = event.currentTarget;
        const divChild = divParent.querySelector('div.children');

        divChild.style.display = '';
    });
});