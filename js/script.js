import { valida } from './validacaoForm.js'


mostraEsconderSenha('form-senha', 'visibility_on', 'visibility_off')

const inputs = document.querySelectorAll('input')
inputs.forEach( input => {
    input.addEventListener('blur', (event) => {valida(event.target)})
})



function mostraEsconderSenha(input, vOn, vOff) {
    const inputSenha = document.querySelectorAll(`.${input}`)

    inputSenha.forEach( Element => {
        const e = Element.nextElementSibling
        
        e.addEventListener('click', () => {
            if (Element.type === 'password'){
                Element.type = 'text';
                e.querySelector(`.${vOn}`).style.display = 'initial'
                e.querySelector(`.${vOff}`).style.display = 'none'
            } else {
                Element.type = 'password';
                e.querySelector(`.${vOn}`).style.display = 'none'
                e.querySelector(`.${vOff}`).style.display = 'initial'
            }
    })})
}


