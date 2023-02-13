
function mostraOuEsconderSenha () {
    const visualizarSenha = document.querySelectorAll('.visualizarSenha');
    const campoSenha = document.querySelector('#password');

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
    })
}

mostraOuEsconderSenha();
