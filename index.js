
const resultContainer = document.getElementById("result")

const showText = (text) => {
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.firstChild);
  }
  
  const span = document.createElement('span');
  span.textContent = text;
  span.style = "display: inline-block; width: 20vw; margin-left:auto; margin-right: auto; height: 781px; color: #495057; font-size: 24px; font-family: Inter; font-weight: 400; line-height: 36px; word-wrap: break-word;";

  const button = document.createElement('button');
  button.textContent = 'Copiar';
  button.style = "width: 20vw; height: 67px; margin-left:auto; margin-right: auto; padding: 20px; background: #D8DFE8; border-radius: 24px; justify-content: flex-start; align-items: flex-start; flex: 1 1 0; text-align: center; color: #0A3871; font-size: 18px; font-family: Inter; font-weight: 400; word-wrap: break-word"

  button.addEventListener('click', () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Texto encriptado copiado al portapapeles');
    }).catch(err => {
      alert('Error al copiar el texto encriptado al portapapeles: ', err);
    });
  });

  resultContainer.appendChild(span);
  resultContainer.appendChild(button);
}
const text = document.getElementById("inputText")

function encryptText(text) {
  if (/[\u00C0-\u00DC\u00E0-\u00FC]/.test(text) || /[A-Z]/.test(text)) {
    alert("Error: El texto no debe contener acentos ni letras mayúsculas.")
    return
}

  let encryptedText = text;
  encryptedText = encryptedText.replace(/e/g, 'enter');
  encryptedText = encryptedText.replace(/i/g, 'imes');
  encryptedText = encryptedText.replace(/a/g, 'ai');
  encryptedText = encryptedText.replace(/o/g, 'ober');
  encryptedText = encryptedText.replace(/u/g, 'ufat');

  return encryptedText;
}

const encrypt = document.getElementById("encrypt")

encrypt.addEventListener("click",()=>{
  const encryptedText = encryptText(text.value)
  if(encryptedText.length > 0){
    showText(encryptedText)
  }
})


function decryptText(encryptedText) {
  if (/[\u00C0-\u00DC]/.test(encryptedText) || /[A-Z]/.test(encryptedText)) {
    alert("Error: El texto no debe contener acentos ni letras mayúsculas.")
    return
  }
  let decryptedText = encryptedText;
  decryptedText = decryptedText.replace(/ufat/g, 'u');
  decryptedText = decryptedText.replace(/ober/g, 'o');
  decryptedText = decryptedText.replace(/ai/g, 'a');
  decryptedText = decryptedText.replace(/imes/g, 'i');
  decryptedText = decryptedText.replace(/enter/g, 'e');

  return decryptedText;
}

const decrypt = document.getElementById("decrypt")

decrypt.addEventListener("click",()=>{
    const decryptedText = decryptText(text.value)
    if(decryptedText.length > 0){
    showText(decryptedText)}
})

