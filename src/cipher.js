window.cipher = {
  // Acá escribe tu código.
  encode: (offset, string) => {
    let cipEncode = '';
    for (let i = 0; i < string.length; i++) {
      const txt = string.charCodeAt(i);
      if (txt >= 65 && txt <= 90) {
        cipEncode += String.fromCharCode(((txt - 65 + parseInt(offset, 10)) % 26) + 65);
      } else if (txt >= 97 && txt <= 122) {
        cipEncode += String.fromCharCode(((txt - 97 + parseInt(offset, 10)) % 26) + 97);
      } else {
        cipEncode += string[i];
      }
    }
    return cipEncode;
  },

  decode: (offset, string) => {
    /* Acá va tu código que descifra */
    let cipDecode = '';
    for (let i = 0; i < string.length; i++) {
      const txt = string.charCodeAt(i);
      if (txt >= 65 && txt <= 90) {
        cipDecode += String.fromCharCode(((txt + 65 - parseInt(offset, 10)) % 26) + 65);
      } else if (txt >= 97 && txt <= 122) {
        cipDecode += String.fromCharCode(((txt - 97 - parseInt(offset, 10) + 52) % 26) + 97);
      } else {
        cipDecode += string[i];
      }
    }
    return cipDecode;
  },
};
