window.cipher = {
  // Acá escribe tu código.
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let cipEncode = "";
    for (let i = 0; i < string.length; i++) {
      let txt = string.charCodeAt(i);
      if (65 <= txt && txt <= 90) {
        cipEncode += String.fromCharCode(
          ((txt - 65 + parseInt(offset)) % 26) + 65
        );
      } else if (97 <= txt && txt <= 122) { 
        cipEncode += String.fromCharCode(
          ((txt - 97 + parseInt(offset)) % 26) + 97
        );
      } else {
        cipEncode += string.charAt(i);
      }
    }
    return cipEncode;

    /*let result = "";
      //inicio de recorrido de caracteres
      for (let i = 0; i < string.length; i++) {
        let asciiPosition = string[i];
        if (asciiPosition.match(/[a-z]/i)) {

          if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            let text = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
            result += String.fromCharCode(text);
          }
          else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            text = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
            result += String.fromCharCode(text);
          }
        } 
        else {
          result += asciiPosition;
        }
      }
      return result;*/
  },

  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let cipDecode = "";

    for (let i = 0; i < string.length; i++) {
      let txt = string.charCodeAt(i);
      if (65 <= txt && txt <= 90) {
        cipDecode += String.fromCharCode(
          ((txt + 65 - parseInt(offset)) % 26) + 65
        );
      } else if (97 <= txt && txt <= 122) {
        cipDecode += String.fromCharCode(
          ((txt - 97 - parseInt(offset) + 52) % 26) + 97
        );
      } else {
        cipDecode += string.charAt(i);
      }
    }
    return cipDecode;
  },

};

