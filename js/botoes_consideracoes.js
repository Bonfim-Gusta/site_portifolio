var contador_mouseUp = 0
var contador_botaoOk = 0

function posicaoAleatoria()
{
    var botao_recusar = document.getElementById('posicao-aleatoria')

    var largura_tela = window.innerWidth
    var altura_tela = window.innerHeight

    var maxX = largura_tela - botao_recusar.offsetWidth
    var maxY = altura_tela - botao_recusar.offsetHeight
    
    var posicao_x = Math.floor(Math.random() * maxX)
    var posicao_y = Math.floor(Math.random() * maxY)

    botao_recusar.style.position = 'absolute'
    botao_recusar.style.left = posicao_x + 'px'
    botao_recusar.style.top = posicao_y + 'px'
    contador_mouseUp++
    console.log(contador_mouseUp)
}

function agradecimento()
{
    contador_botaoOk++
    if (contador_mouseUp === 0 || contador_botaoOk > 1)
    {       
        alert('Obrigado pela confiança! Estarei me preparando para as próximas etapas\natt: Gustavo')
    }
    else
    {
        alert('Fico feliz que sua escolha não teve nenhuma influência :) \n\nBrincadeiras a parte, agradeço novamente e estou me preparando para as próximas etapas!\n\natt: Gustavo')
    } 
}