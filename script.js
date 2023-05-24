let passwordLength = 16
const senha = document.querySelector('#password')
function generatePassword() {
    const chars = "abcdefgjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789!@#$%&*"
    let password =""
    for(let i = 0; i < 16 ;i++){
        const ramdomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(ramdomNumber, ramdomNumber + 1)
    }
    senha.value =(password)
}

function copy() {
    navigator.clipboard.writeText(senha.value)
}

const passwordLengthEl = document.querySelector('#password-length')
passwordLengthEl.addEventListener("input", function(){
    const passwordLength = passwordLengthEl.value
    generatePassword()
})
/*Zona de teste*/

const gerarSenha = document.querySelector("#renew")
gerarSenha.addEventListener('click',function(){
    generatePassword()
} )


/*-------------*/

document.querySelector("#copy-1").addEventListener("click", copy)
document.querySelector("#copy-2").addEventListener("click", copy)
generatePassword()