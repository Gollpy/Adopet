    const campoSenha = document.querySelector('#password');
    const visualizarSenha = document.querySelector('.visualizarSenha');

    function mostraOuEsconderSenha () {
        
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


