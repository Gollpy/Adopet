
function mascaraTelefone (event) {
    const input = event.target
    const value = input.value.replace(/\D/g,'')
    const formattedValue = formPhoneNumber(value)
    
    input.value = formattedValue
}

function formPhoneNumber (value) {
    if(value.length === 2) {
        return value.replace(/(\d{2})(\d{1,4})?(\d{4})?/,'$1')
    } else if(value.length <= 6) {
        return value.replace(/(\d{2})(\d{4})?(\d{4})?/,'($1) $2')
    } else if(value.length <= 10) {
        return value.replace(/(\d{2})(\d{4})?(\d{4})?/,'($1) $2-$3')
    } else {
        return value.replace(/(\d{2})(\d{5})?(\d{4})?/,'($1) $2-$3')
    }
}

const telefoneInput = document.getElementById('tel')
telefoneInput.addEventListener('input', mascaraTelefone)