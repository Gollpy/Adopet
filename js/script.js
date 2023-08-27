import { valida } from './validacaoForm.js'
function mostraEsconderSenha() {
    const campoSenha = document.querySelectorAll('.form-senha');

    campoSenha.forEach( Element => {
        const vs = Element.nextElementSibling

        vs.addEventListener('click', (evento) => {
            if (Element.type === 'password'){
                Element.type = 'text';
                vs.querySelector('.visibility_on').style.display = 'initial'
                vs.querySelector('.visibility_off').style.display = 'none'
            } else {
                Element.type = 'password';
                vs.querySelector('.visibility_on').style.display = 'none'
                vs.querySelector('.visibility_off').style.display = 'initial'
            }
    })})
}

const inputs = document.querySelectorAll('input')
const funDoEvento = (evento) => {valida(evento.target)}

inputs.forEach( input => {
    input.addEventListener('blur', funDoEvento)
    input.addEventListener('keyup', funDoEvento)
})

mostraEsconderSenha()

