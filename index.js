class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    let returnString = '';
    const arrOfString = [...string];
    for (let index = 0; index < arrOfString.length; index++) {
      if (arrOfString[index] !== /^[0-9A-Za-z\s\-]+$/) {
        returnString = returnString.concat(arrOfString[index])
      }
      


    }
    console.log(returnString)
    return returnString;
    
  }
}


console.log(Formatter.sanitize("Hi$%^ Tim!"))