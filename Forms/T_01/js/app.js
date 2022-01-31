document.querySelector('form').addEventListener('submit', function(event) {

    event.preventDefault();

    const errors = [];

    const emailInput = document.querySelector('#email');
    if( ! emailInput.value.includes('@')) {
        errors.push('Email powinien zawierać znak @');
    }

    const nameInput = document.querySelector('#name');
    if(nameInput.value.length <= 2) {
        errors.push('Imię powinno mieć co najmniej dwa znaki');
    }

    const surnameInput = document.querySelector('#surname');
    if(surnameInput.value.length <= 2) {
        errors.push('Nazwisko powinno mieć co najmniej dwa znaki');
    }

    const pass1 = document.querySelector('#pass1');
    const pass2 = document.querySelector('#pass2');
    if(pass1.value != pass2.value || pass1.value == '') {
        errors.push('Hasła muszą być takie same, i nie mogą być puste');
    }

    const agree = document.querySelector('#agree');
    if(agree.checked == false) {    // albo if(!agree.checked) {
        errors.push('Musisz zaakceptwać warunki');
    }


    if(errors.length > 0) {
        // POKAZUJEMY błęy
        const errorDiv = document.querySelector('#error-message');
        errorDiv.classList.remove('d-none');
        errorDiv.innerText = errors.join(', ');

        // UKRYWAMY sukces
        const successDiv = document.querySelector('#success-message');
        successDiv.classList.add('d-none');
    } else {
        const errorDiv = document.querySelector('#error-message');
        errorDiv.classList.add('d-none');

        const successDiv = document.querySelector('#success-message');
        successDiv.classList.remove('d-none');
        successDiv.innerText = 'Formularz wysłany!'
    }

})