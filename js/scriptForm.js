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

// function janelaRecuperarSenha () {
//     const botao = document.querySelectorAll('.abrir');
//     const styleDisplay = document.querySelector('.section-recuperar-senha');
//     botao.forEach(botao => {
//         botao.addEventListener('click', () => {
//             if (styleDisplay.style.display === 'none'){
//                 styleDisplay.style.display = 'flex';
//             } else {
//                 styleDisplay.style.display = 'none';
//             }
//         })
//     })
// }
mostraEsconderSenha();