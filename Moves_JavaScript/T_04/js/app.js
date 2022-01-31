const orderIdInput = document.querySelector('#orderId');
const itemInput = document.querySelector('#item');
const quantityInput = document.querySelector('#quantity');
const addButton = document.querySelector('#add');

addButton.addEventListener('click', function() {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.innerText = orderIdInput.value;
    td2.innerText = itemInput.value;
    td3.innerText = quantityInput.value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.querySelector('#orders tbody').appendChild(tr);
})