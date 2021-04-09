const charCheck = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v,","w","x","y","z","0","1","2","3","4","5","6","7","8","9","0","-","'"," "]
const conjWords = ["a", "an", "but", "of", "and", "for", "at", "by", "from"]

class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    const arrOfString = [...string];
    //console.log(arrOfString)
    let returnString = '';
    
    for (let index = 0; index < arrOfString.length; index++) {
      for (let i = 0; i < charCheck.length; i++) {
        if (arrOfString[index].toLowerCase() === charCheck[i]){
          //console.log (`${arrOfString[index]} is equal to ${charCheck[i]}`)
          returnString = returnString + arrOfString[index];
          break;

        }
        
      }
            
    }
    //console.log(returnString)
    return returnString;
    } 

  static titleize(string) {
    const arrOfString = string.split(" ");
    let returnString = '';

    for (let index = 0; index < arrOfString.length; index++) {

      console.log(index)
      if (index === 0){
        returnString = returnString + arrOfString[index].toUpperCase();
      }


      for (let i = 0; i < conjWords.length; i++) {
        if (arrOfString[index].toLowerCase() === conjWords[i]){

          //maybe use splice to remove the bad words from the array???

          returnString = returnString + arrOfString[index];
          break; 
      }
      
    }

    


  }
  console.log(returnString);
  return returnString;
  }
}

  Formatter.titleize("Hello and my for name at is Tim")
