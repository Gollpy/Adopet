function mostraEsconderSenha () {
    const campoSenha = document.querySelectorAll('.form-senha');
    campoSenha.forEach( campoSenha => {
        campoSenha.nextElementSibling.querySelector('.visualizarSenha').onclick = () => {
            if (campoSenha.type === 'password'){
                campoSenha.nextElementSibling.querySelector('.visualizarSenha').innerHTML = 'visibility';
                campoSenha.type = 'text';
            } else {
                campoSenha.nextElementSibling.querySelector('.visualizarSenha').innerHTML = 'visibility_off';
                campoSenha.type = 'password';
            }
            
        }
    });
}

function janelaRecuperarSenha () {
    const botao = document.querySelectorAll('.abrir');
    const styleDisplay = document.querySelector('.section-recuperar-senha');
    botao.forEach(botao => {
        botao.addEventListener('click', () => {
            if (styleDisplay.style.display === 'none'){
                styleDisplay.style.display = 'flex';
            } else {
                styleDisplay.style.display = 'none';
            }
        })
    })
}

janelaRecuperarSenha();
mostraEsconderSenha();

// lixo--->
//document.querySelectorAll('.form-senha')[0].nextElementSibling.querySelector('.visualizarSenha')
// let visualizarSenha = querySelector('.visualizarSenha');
/*
function mostraOuEsconderSenha () {
    const campoSenha = document.querySelector('#password');
    const visualizarSenha = document.querySelector('.visualizarSenha');


    visualizarSenha.forEach(visualizarSenha => {
        visualizarSenha.onclick = () => {
    
    visualizarSenha.forEach(visualizarSenha => {
        visualizarSenha.onclick = () => {
    if (campoSenha.type === 'password'){
        visualizarSenha.innerHTML = 'visibility';
        campoSenha.type = 'text';
        
    } else {
        visualizarSenha.innerHTML = 'visibility_off';
        campoSenha.type = 'password';

    }
}

document.querySelector('.visualizarSenha').onclick = function () {
mostraOuEsconderSenha();
}

//const indiv = document.querySelector('.form-senha').parentElement.childNodes[3].childNodes[1];visualizarSenha.parentElement.parentElement.children.type
*/