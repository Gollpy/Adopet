const body = document.querySelector('body');
const footer = document.querySelector('footer');

if(body.clientHeight < screen.height){
    footer.style.cssText = "position:fixed;bottom: 0;left: 0;";
}