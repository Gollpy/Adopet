export function valida(input) {
    const tipoDeInput = input.dataset.tipo

     if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
console.log(input.validity.valid)

    if(input.validity.valid) {
        input.parentElement.querySelector('.mensagemError').innerHTML = ''
    } else {
        input.parentElement.querySelector('.mensagemError').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
        console.debug(mostraMensagemDeErro(tipoDeInput, input))
    }
}
// .remove('mensagemError')
// .add('mensagemError')
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
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
        customError: /* 'A senha não é igual.' */  'A senha não é igual.',
        patternMismatch:'',
        valueMissing: 'O campo confirmar senha não pode estar vazio.'
    }}

const validadores = {
    passwordConfirm:input => comparasenha(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    // const confirmar = $('[data-tipo=passwordConfirm]')
    let mensagem = ''
    
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}
// const passwordConfirm = document.querySelector('[data-tipo=passwordConfirm]')
//     if(passwordConfirm.value === input.value && !input.validity.valueMissing){
//         mensagem = 'A senha não é igual.'
//     }
//     passwordConfirm.setCustomValidity(mensagem)

function comparasenha (input){
    const senha = document.querySelector('[data-tipo=password]');
    const modCorMsgErro = input.parentElement.querySelector('.mensagemError')
    const modMsgErro = mensagensDeErro.passwordConfirm
    let mensagem = ''
    
    if(senha.value !== '' && input.value !== ''){
        if(input.value === senha.value){
            modCorMsgErro.style.cssText = 'color:#36d6ad;'
            modMsgErro.customError = 'A senha é igual.'
            mensagem = 'A senha é igual.'
        } else {
            modCorMsgErro.style.cssText = 'color:FC7071;'
            modMsgErro.customError = 'A senha não é igual.'
            mensagem = 'A senha não igual.'
        }

    }

    input.setCustomValidity(mensagem)
}
