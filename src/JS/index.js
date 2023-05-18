var botaoAlterarTema = document.getElementById('botao-alterar-tema')
var body = document.querySelector('body')
var imagemBotao = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {
    var modoEscuro = body.classList.contains('modo-escuro')

    body.classList.toggle('modo-escuro')

    if (modoEscuro) {
        imagemBotao.setAttribute('src', './src/img/sun.png')
    } else {
        imagemBotao.setAttribute('src', './src/img/moon.png')
    }
})