
    function mostraOuEsconderSenha () {
        const campoSenha = document.querySelector('#password');
        const visualizarSenha = document.querySelector('.visualizarSenha');

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

    const body = document.querySelector('body');
    const footer = document.querySelector('footer');

    if(body.clientHeight < screen.height){
        footer.style.cssText = "position:fixed;bottom: 0;left: 0;";
        console.log('cheque');
    }

