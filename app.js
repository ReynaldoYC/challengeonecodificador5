const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const txtContent = document.getElementById('text-content');
const btnCopy = document.querySelector('.btn-copy');
const encryptedContainer = document.getElementById('encrypted-container');

function disableButton() {
    btnEncrypt.disabled = "true";
    btnDecrypt.disabled = "true";
    btnEncrypt.classList.add('disable');
    btnDecrypt.classList.add('disable');
}
function enableButton() {
    btnEncrypt.disabled = "";
    btnDecrypt.disabled = "";
    btnEncrypt.classList.remove('disable');
    btnDecrypt.classList.remove('disable');
}
disableButton();
disableBtnCopy();
txtContent.addEventListener('keyup',()=>{
    if(txtContent.value.length > 0){
        enableButton();
    }else{
        disableButton();
    }
});
function warningClear() {
    const textWarning = document.querySelector('.text-warning');
    textWarning.classList.add('d-none');
};
btnEncrypt.addEventListener('click', e => {
    e.preventDefault();
    const textEncrypt = txtContent.value.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    warningClear();
    const encryptText = document.querySelector('.encrypted-text');
    encryptText.innerText = textEncrypt;
    encryptedContainer.classList.remove('d-none');
    btnCopy.classList.remove('d-none');
    btnCopy.textContent='Copiar';
});
btnDecrypt.addEventListener('click', e => {
    e.preventDefault();
    const textDecrypt = txtContent.value.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    warningClear();
    const encryptText = document.querySelector('.encrypted-text');
    encryptText.innerText = textDecrypt;
    encryptedContainer.classList.remove('d-none');
    btnCopy.classList.remove('d-none');
    btnCopy.textContent='Copiar';
});
function disableBtnCopy() {
    btnCopy.classList.add('d-none');
};
btnCopy.addEventListener('click', e =>{
    const encryptedText = document.querySelector('.encrypted-text');
    let textCopy = encryptedText.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value',textCopy);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentElement.removeChild(inputElement);
    btnCopy.textContent = 'Copiado';
});
