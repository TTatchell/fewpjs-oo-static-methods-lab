const charCheck = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v,","w","x","y","z","0","1","2","3","4","5","6","7","8","9","0","-","'"," "]

class Formatter {
  constructor () {
    this.charCheck = charCheck;
  }
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    const arrOfString = [...string];
    console.log(arrOfString)
    
    for (let index = 0; index < arrOfString.length; index++) {
      for (let i = 0; i < charCheck.length; i++) {
        if (arrOfString[index] === charCheck[i]){
          console.log (`${arrOfString[index]} is equal to ${charCheck[i]}`)
        }
        else console.log("char not found")
        
      }
      


      console.log(arrOfString[index])
      
    }
      


    }
    //console.log(returnString)
    //return returnString;
    
  }

console.log(Formatter.sanitize("Hi$%^ Tim!"))