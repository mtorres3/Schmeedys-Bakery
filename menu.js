const menuTypes = document.getElementsByClassName('menu-type')
const cookieCards = document.getElementById('cookie-cards')
const cupcakeCards = document.getElementById('cupcake-cards')
const cakeCards = document.getElementById('cake-cards')
const breadCards = document.getElementById('bread-cards')

function menuTypeSelection(event){
    //Change Nav-bar color to selected category
    for(let i = 0; i < menuTypes.length; i++){
        menuTypes[i].style.color = '#1b998b'
    }
    event.target.style.color = '#bc8034'
    
    //Hide all sections but selected
    if(event.target.innerHTML === 'Cupcakes'){
        cookieCards.style.display = 'none'
        cupcakeCards.style.display = 'flex'
        cakeCards.style.display = 'none'
        breadCards.style.display = 'none'
    }
    else if(event.target.innerHTML === 'Cakes'){
        cookieCards.style.display = 'none'
        cupcakeCards.style.display = 'none'
        cakeCards.style.display = 'flex'
        breadCards.style.display = 'none'
    }
    else if(event.target.innerHTML === 'Breads'){
        cookieCards.style.display = 'none'
        cupcakeCards.style.display = 'none'
        cakeCards.style.display = 'none'
        breadCards.style.display = 'flex'
    }
    else{
        cookieCards.style.display = 'flex'
        cupcakeCards.style.display = 'none'
        cakeCards.style.display = 'none'
        breadCards.style.display = 'none'
    }
}