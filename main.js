
/* abre e fecha o menu quando clicar no icone: hambuguer e no x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")


for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, escoder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* mudar o header da página qunado der scroll */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight


window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        // scroll é maior que altura do header
        header.classList.add('scroll')
    
    } else {
        // menor que altura do header 
        header.classList.remove('scroll')
    }
})