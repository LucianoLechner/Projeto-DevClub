// declarar as variaveis
// 
let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

// variaveis de posicao do container.items
// 
let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

// faz com que o container passe item por item, removendo e adicionando a classe ativa (active)
// 
nextButton.onclick = () => {
    // remove a classe ativa
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    // adiciona a classe ativa
    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    // remove a classe ativa do indicador do container item
    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    // adiciona a classe ativa do indicador do container item
    dots[active].classList.add('active')

    // altera o valor do container ativo
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

// faz com que o container volte item por item, funcao inversa
// 
prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? active + 2 : active - 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

    // ou     active = active - 1 < firstPosition ? lastPosition : active - 1
    //        items[active].classList.add('active')

