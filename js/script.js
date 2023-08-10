import { valida } from './validacaoForm.js'
function mostraEsconderSenha() {
    const campoSenha = document.querySelectorAll('.form-senha');
    campoSenha.forEach( Element => {
        const vs = Element.nextElementSibling.querySelector('.visualizarSenha');
        vs.onclick = () => {
            if (Element.type === 'password'){
                vs.innerHTML = 'visibility';
                Element.type = 'text';
            } else {
                vs.innerHTML = 'visibility_off';
                Element.type = 'password';
            }
            
        }
    })};
    mostraEsconderSenha()

    // inputs.addEventListener('blur', (evento) => {
        //     valida(evento.target)})
        
    const inputs = document.querySelectorAll('input')
    inputs.forEach( input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
    })


