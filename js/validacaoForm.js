export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valida) {
        input.parentElement.querySelector('.mensagemError').innerHTML = ''
    } else {
        input.parentElement.querySelector('.mensagemError').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
        console.log(mostraMensagemDeErro(tipoDeInput, input))
    }
}
// .remove('mensagemError')
// .add('mensagemError')
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
]

const mensagensDeErro = {
    name: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    password: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    },
    passwordConfirm: {
        valueMissing: 'O campo confirmar senha não pode estar vazio.'
    }};

    function validadores(){

    }

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}

// function comparasenha (input){
//         const senha = input.value;
//         const confirmarSenha = input.value;
//         if(senha = confirmarSenha){
//             return true
//         } else {
//             return false
//         }
// }