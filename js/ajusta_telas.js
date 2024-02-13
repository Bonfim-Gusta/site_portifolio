var tela = window.innerHeight
var larguraTela = window.innerWidth
console.log(tela)
if (tela > 1000)
{
    document.querySelector('.sumir').classList.remove('d-lg-block')
    document.querySelector('.aparecer').classList.remove('d-lg-none')
    document.querySelector('#minha-apresentacao').classList.remove('col-lg-7')
    document.querySelector('#minha-apresentacao').classList.add('col-lg-12')
    document.querySelector('.rodape').classList.add('d-none')
}

var botao = document.querySelector('#menu')

document.querySelector('.fixed-bottom').classList.add('fixed-bottom')

const myObserver = new IntersectionObserver((entries) => 
 {
    entries.forEach((entry) => 
    {
        if(entry.isIntersecting)
        {
            document.querySelector('.rodape').classList.remove('fixed-bottom')
        }
        if(entry.isIntersecting === false)
        {
            document.querySelector('.rodape').classList.add('fixed-bottom')
        }
    })
 })

 myObserver.observe(botao)
