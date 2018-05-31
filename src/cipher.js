window.cipher = {
    encode: (text, offset) => {
    /* Acá va tu código */
    const textChar;
    let result = "";
    for (let i=0; i<text.length; i++) {
    var textChar = ((text.charCodeAt(i) - 65 + offset)%26) + 65;
    var textCipher = String.fromCharCode(textChar);
    }
    return textCipher;
  },
  decode: (text, offset) => {
    /* Acá va tu código */
    const texChar2;
    let result = "";
    for(let i = 0; i<text.length; i++){
    var textChar2 = ((text.charCodeAt(i) - 65 - offset)%26) + 65;
    var textDecipher = String.fromCharCode(textChar2);
    }
  return textDecipher;
  }
}