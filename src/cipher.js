window.cipher = {
    encode: (text, offsetNu )=> {
      let result ="";
      let textCipher ="";
      offsetNu = parseInt(offsetNu);
      for (let i=0; i<text.length; i++) {
        var textChar = ((text.charCodeAt(i) - 65 + offsetNu)%26) + 65;
        textCipher += String.fromCharCode(textChar);
      }
       return textCipher;
  },
  decode: (text, offsetNu) => {
    let result ="";
    let textDecipher ="";
    for (let i=0; i<text.length; i++){
      var textChar = text.charCodeAt(i) - 65 - offsetNu%26 + 65;
      textDecipher += String.fromCharCode(textChar);
      if (textChar < 65) {
        textChar += 26;
      }
    }
  return textDecipher;
  }
}