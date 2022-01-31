document.querySelectorAll('img')[0].style.display = 'block';
document.querySelectorAll('img')[1].style.display = 'none';
document.querySelectorAll('img')[2].style.display = 'none';
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    if(document.querySelector('select').value == 'Windows'){
        document.querySelectorAll('img')[0].style.display = 'block';
        document.querySelectorAll('img')[1].style.display = 'none';
        document.querySelectorAll('img')[2].style.display = 'none';
    }
    else if(document.querySelector('select').value == 'MacOS'){
        document.querySelectorAll('img')[0].style.display = 'none';
        document.querySelectorAll('img')[1].style.display = 'block';
        document.querySelectorAll('img')[2].style.display = 'none';
    }
    else if(document.querySelector('select').value == 'Ubuntu'){
        document.querySelectorAll('img')[0].style.display = 'none';
        document.querySelectorAll('img')[1].style.display = 'none';
        document.querySelectorAll('img')[2].style.display = 'block';
    }
});