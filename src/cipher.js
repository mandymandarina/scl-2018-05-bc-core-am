window.cipher = {
  
  encode: () => {
    /* Acá va tu código */
    
    function cipher(text){
    
    const textCipher ="";
    let result = "";

    for(let i =0; i<text.length; i++){
    var textChar = (text.charCodeAt(i) - 65 + num)%26 + 65;

      textCipher += String.fromCharCode(textChar);
    }
    return textCipher;
  } 
  },

  decode: () => {
    /* Acá va tu código */

    function decipher(text){
    
    const textDecipher = "";
    let result = "";

    for(let i = 0; i<text.length; i++){

      var textChar = (String.fromCharCode(text(i)) + num)%26;
      textDecipher = textDecipher + textChar;
      var newText = newText.charCodeAt(textDecipher);
    }
    return newText;
    }
  }

}