window.cipher = {
  // Acá escribe tu código.
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    let cipEncode = "";
    for (let i = 0; i < string.length; i++) {
      let txt = string.charCodeAt(i);
      if (65 <= txt && txt <= 90) {
        cipEncode += String.fromCharCode(((txt - 65 + parseInt(offset)) % 26) + 65);
      } else if (97 <= txt && txt <= 122) {
        cipEncode += String.fromCharCode(((txt - 97 + parseInt(offset)) % 26) + 97);
      } else {
        cipEncode += string.charAt(i);
      }
    }
    return cipEncode;
  },

  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let cipDecode = "";

    for (let i = 0; i < string.length; i++) {
      let txt = string.charCodeAt(i);
      if (65 <= txt && txt <= 90) {
        cipDecode += String.fromCharCode(((txt + 65 - parseInt(offset)) % 26) + 65);
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
