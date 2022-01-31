document.querySelector('#cardNumber').addEventListener('keyup', function() {
    const visa = document.querySelector('#visa-icon');
    const amex = document.querySelector('#amex-icon');
    const mc = document.querySelector('#mastercard-icon');

    visa.style.color = '';
    amex.style.color = '';
    mc.style.color = '';

    visa.style.display = 'none';
    amex.style.display = 'none';
    mc.style.display = 'none';

    if(this.value[0] == '4') {
        visa.style.display = '';
        if(this.value.length >= 13 && this.value.length <= 16) {
            visa.style.color = 'green';
        }
    }
    if(this.value[0] == '5') {
        mc.style.display = '';
        if(this.value.length == 16) {
            mc.style.color = 'green';
        }
    }
    if(this.value[0] == '3' && ( this.value[1] == '4' || this.value[1] == '7' )) {
        amex.style.display = '';
        if(this.value.length == 15) {
            amex.style.color = 'green';
        }
    }
})