window.cipher = {
  encode: (text, offsetNu) => {
    let result = "";
    let textCipher = "";
    text = text.toUpperCase();
    offsetNu = parseInt(offsetNu);
    for (let i = 0; i < text.length; i++) {
      var textChar = ((text.charCodeAt(i) - 65 + offsetNu) % 26) + 65;
      if (text.charCodeAt(i) === 32) {
        textCipher += " ";
      }
      textCipher += String.fromCharCode(textChar);
    }
    return textCipher;
  },
  decode: (text, offsetNu) => {
    let result = "";
    let textDecipher = "";
    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      var textChar = ((text.charCodeAt(i) - 65 - offsetNu) % 26) + 65;
      if (textChar < 65) {
        textChar += 26;
      }
      if (text.charCodeAt(i) === 32) {
        textDecipher += " ";
      }
      textDecipher += String.fromCharCode(textChar);

    }
    return textDecipher;
  }
}