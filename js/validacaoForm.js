export function valida(input) {
    const tipoDeInput = input.dataset.tipo

     if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
console.log(input.validity.valid)

    if(input.validity.valid) {
        input.parentElement.parentElement.querySelector('.mensagemError').innerHTML = ''
    } else {
        input.parentElement.parentElement.querySelector('.mensagemError').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
        console.debug(mostraMensagemDeErro(tipoDeInput, input))
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]
const mensagensDeErro = {
    name: {
        valueMissing: "O campo de nome não pode estar vazio."
    },
    email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "O email digitado não é válido."
    },
    password: {
        valueMissing: "O campo de senha não pode estar vazio.",
        patternMismatch: "A senha deve conter entre 6 a 15 caracteres, deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial(!#@$%&). "
    },
    passwordConfirm: {
        customError:"A senha não corresponde.",
        patternMismatch:"",
        valueMissing: "O campo 'Confirmar Senha' não pode estar vazio."
    },
    tel: {
        valueMissing: "insira um numero de telefone ou WhatSapp."
    },
    animalName: {
        valueMissing: "coloque o nome do pet que deseja adotar."
    }}

const validadores = {
    passwordConfirm:input => comparasenha(input)
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

function comparasenha (input){
    const senha = document.querySelector('[data-tipo=password]')
    const MsgErro = input.parentElement.parentElement.querySelector('.mensagemError')
    const modMsgErro = mensagensDeErro.passwordConfirm
    let mensagem = ''

    if(senha.value !== '' && input.value !== ''){
        if(input.value === senha.value){
            mensagem = ''
        } else {
            mensagem = 'A senha não corresponde.'
        }
    }

    modMsgErro.customError = mensagem
    input.setCustomValidity(mensagem)
}
 