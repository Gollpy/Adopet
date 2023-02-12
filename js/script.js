function footerSempreEmBaixo () {
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');
    if(body.clientHeight < screen.height){
        footer.style.cssText = "position:fixed;bottom: 0;left: 0;";
    }
}

function janelaRecuperarSenha () {
    const aa = document.querySelectorAll('.abrir');
    const bb = document.querySelector('.section-recuperar-senha');
    aa.forEach(aa => {
        aa.addEventListener('click', (poram) => {
            const styleDisplay = bb.style.display;
            if (styleDisplay === 'none'){
                bb.style.display = 'flex';
            } else {
                bb.style.display = 'none';
            };
        });
    })
}

footerSempreEmBaixo();
janelaRecuperarSenha();