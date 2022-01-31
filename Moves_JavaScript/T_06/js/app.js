document.querySelectorAll('a').forEach(function (item){
    item.addEventListener('click', function () {
        const list1 = document.querySelector('#list1');
        const list2 = document.querySelector('#list2');
        if(this.parentElement.id == 'list1') {
            list2.appendChild(this);
        }
        else if (this.parentElement.id == 'list2') {
            list1.appendChild(this);
        }
    });
});

//document.querySelectorAll('a').forEach(function(a) {

    //a.addEventListener('click', function() {

        //const div = this.parentElement;
        //if(div.id == 'list1') {
            //document.querySelector('#list2').appendChild(this);
        //} else {
            //document.querySelector('#list1').appendChild(this);
        //}

    //})

//})