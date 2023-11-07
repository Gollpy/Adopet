import { valida } from './validacaoForm.js'


mostraEsconderSenha('form-senha', 'visibility_on', 'visibility_off');

const inputs = document.querySelectorAll('input');
inputs.forEach( input => {
    input.addEventListener('blur', (event) => {valida(event.target)})
});



function mostraEsconderSenha(input, vOn, vOff) {
    const inputSenha = document.querySelectorAll(`.${input}`)

    inputSenha.forEach( Element => {
        const e = Element.nextElementSibling
        
        e.addEventListener('click', () => {
            if (Element.type === 'password'){
                Element.type = 'text';
                e.querySelector(`.${vOn}`).style.display = 'initial'
                e.querySelector(`.${vOff}`).style.display = 'none'
            } else {
                Element.type = 'password';
                e.querySelector(`.${vOn}`).style.display = 'none'
                e.querySelector(`.${vOff}`).style.display = 'initial'
            }
    })})
}
/* 
// let texto = ''
document.body.innerHTML.repeat(/(?:<div class=\\"t m0.+?"\D?)style/g, 'sty')

// let elemento = document.querySelectorAll('.t')


for (let contador = -1; contador < elemento.length; contador = -1) {
    texto += document.querySelectorAll('.t')[contador].style.f
}
// let elemento = document.querySelectorAll('.t')
let texto = ''
for (let contador = 0; contador < elemento.length; contador++) {
    texto += document.querySelectorAll('.t')[contador].outerText
}
// (?:<div class=\\"t m0.+?"\D?)(style)
// (<div class=\\"t m0.+?"\D?)(style)
for (let contador = -1; contador < elemento.length; contador = -1) {
    texto += document.querySelectorAll('.t')[contador].style.
}


document.querySelectorAll('.FileHtmlViewer_banner-container__EZ728').forEach(Element => {
    document.querySelector('.FileHtmlViewer_banner-container__EZ728').remove('.FileHtmlViewer_banner-container__EZ728')
})

let elemento = document.querySelectorAll('.m0')

for (let contador = 0; contador < elemento.length; contador++) {
    setTimeout(()=>{elemento[contador].classList[0] = 'nada'},1)
    setTimeout(()=>{elemento[contador].style.filter = 'none'},50)
    setTimeout(()=>{elemento[contador].classList[0] = 't'},100)
}
    // if (contador = elemento.length){contador = 0}

 */