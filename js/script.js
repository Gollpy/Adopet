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
    })  };
    mostraEsconderSenha()

    // inputs.addEventListener('blur', (evento) => {
        //     valida(evento.target)})
        
    const inputs = document.querySelectorAll('input')
    inputs.forEach( input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
    })

//------------------------------------------------------------------//
/*adaptar trecho do código para o script que valida o cadastro */
// const confirmarSenha = document.querySelector("#passwordConfirm")
// const senha = document.querySelector("#password")

// const fun = (fun) => {
//     if (!senha.value.valueMissing) {
//         function compara() {
//             if(confirmarSenha.value === senha.value){
//                 return true
//             } else {
//                 return false
//             }
//         }
    
//         const mensagemError = confirmarSenha.parentElement.querySelector('.mensagemError')
//         if (compara()) {
//             console.log('tudo certo. A senha é igual')
//             mensagemError.innerHTML = 'tudo certo. A senha é igual.'
//         } else {
//             console.log('opa! a senha não é igual')
//             mensagemError.innerHTML = 'opa! a senha não é igual.'
//         }

//         console.log(compara())
//     }
// }

// confirmarSenha.addEventListener('keyup', fun, 'useCapture')
// confirmarSenha.addEventListener('click', fun, 'useCapture')
//-------------------------------------------------------------------//