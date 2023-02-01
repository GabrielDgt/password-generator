const passResult = document.getElementById('passGenTxt')
const generateBtn = document.getElementById('genButton')
const copyBtn = document.getElementById('copyBtn')
let passLen = document.getElementById('rangeBar')
let textMsg = document.getElementById('copiedTxt')
let passString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

generateBtn.addEventListener('click', () => {
    let pass = ''
    let isChecked = document.getElementById('checkBox').checked
    let finalPass = passString

    if(isChecked) {
        finalPass += '!@#$%&*()-_=+/'
    }
    for (let i = 1; i <= passLen.value; i++){
        let pwd = finalPass[Math.floor(Math.random() * finalPass.length)]
        pass += pwd
    }
    passResult.innerText = pass
    finalPass = passString
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passResult.innerText)
    textMsg.textContent = 'Password copied!'
    textMsg.style.display = 'block'
    setTimeout(() => {
        textMsg.style.display = 'none'
    }, 2000)
})
