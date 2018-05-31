window.cipher = {
    encode: (text, offset)=> {
      let result ="";
      for (let i=0; i<text.length; i++) {
        var textChar = ((text.charCodeAt(i) - 65 + 33)%26) + 65;
        var textCipher = String.fromCharCode(textChar);
      }
       return textCipher;
  },
  decode: (text, offset) => {
    let result ="";
    for (let i=0; i<text.length; i++){
      var textChar = ((text.charCodeAt(i) - 65 - 33)%26) + 65;
      var textDecipher = String.fromCharCode(textChar);
    }
  return textDecipher;
  }
}