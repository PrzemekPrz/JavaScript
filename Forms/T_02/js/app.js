document.querySelector('#invoiceData').style.display = 'none';

document.querySelector('#invoice').addEventListener('change', function() {
    if(this.checked) {
        document.querySelector('#invoiceData').style.display = '';
    } else {
        document.querySelector('#invoiceData').style.display = 'none'
    }
})