const main_table_body = document.querySelector('.table tbody')

const add_button = document.querySelector('.btn')

const team1 = document.querySelector('#team1')
const points1 = document.querySelector('#points1')


const team2 = document.querySelector('#team2')
const points2 = document.querySelector('#points2')


add_button.addEventListener('click', function (event){
    event.preventDefault()
    const newTr = document.createElement('tr')
    const team1td = document.createElement('td')
    const team2td = document.createElement('td')
    const resultTd = document.createElement('td')
    if(team1.value == "" ||team2.value == "" ||team1.value == team2.value){
        return;
    }
    if(points1.value=="" || points1.value <0 || points2.value=="" || points2.value < 0){
        return;
    }
    team1td.innerText = team1.value
    team2td.innerText = team2.value
    resultTd.innerText = `${points1.value}-${points2.value}`

    newTr.appendChild(team1td)
    newTr.appendChild(team2td)
    newTr.appendChild(resultTd)

    main_table_body.appendChild(newTr)

})