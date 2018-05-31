window.cipher = {
    encode: (text, offset) => {
    /* Acá va tu código */
    let textCipher;
    let result ="";
    for (let i=0; i<text.length; i++) {
     textCipher = ((text.charCodeAt(i) - 65 + offset)%26) + 65;
     result += String.fromCharCode(textCipher);
    }
    return result;
  },
  decode: (text, offset) => {
    /* Acá va tu código */
    let texChar2;
    let result = "";
    for(let i = 0; i<text.length; i++){
    var textChar2 = ((text.charCodeAt(i) - 65 - offset)%26) + 65;
    var textDecipher = String.fromCharCode(textChar2);
    }
  return textDecipher;
  }
}