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
mostraEsconderSenha();