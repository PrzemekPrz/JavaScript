document.querySelector('form').addEventListener('submit', function(event) {

    event.preventDefault();

    const isbn = document.querySelector('[name=isbn]').value;

    const address = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;

    fetch(address).then(
        function(response) {
            console.log('LINIA 11');
            return response.json();
        }
    ).then(
        function(data) {
            console.log('LINIA 16');
            const h2 = document.createElement('h2');
            h2.innerText = data.items[0].volumeInfo.title;

            document.querySelector('.book-info').appendChild(h2);
        }
    );
    console.log('LINIA 23');


})