function janelaRecuperarSenha() {
    const botao = document.querySelectorAll('.abrir');
    const styleDisplay = document.querySelector('.section-recuperar-senha');
    botao.forEach(botao => {
        botao.addEventListener('click', () => {
            if (styleDisplay.style.display === 'none') {
                styleDisplay.style.display = 'flex';
            } else {
                styleDisplay.style.display = 'none';
            }
        });
    });
}
janelaRecuperarSenha();
mostraEsconderSenha();
