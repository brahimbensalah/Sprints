
/* ***************************  More Practice  ***********************
/*5.Keep track of a high score (the lowest number of guesses) between games, and,
 when the correct number has been guessed in a record number of times,
 include in the message something that indicates that a new high score has been set.
*/
var upperBound =7
var r = randInt(upperBound )
var nbr = 1 
var highscore=0


function guessMyNumber(n) {
    if (nbr<5)
    {
            if (n > upperBound ) { 
                nbr = nbr +1 ; 

                                     return 'Out of bounds! Please try a number between 0 and   '+upperBound ; 
             } else if (n === r) 
                    {
                        if(nbr<=highscore)
                        {
                            highscore = nbr
                             console.log(highscore)
                 return "You guessed my number with the lowest number of guesses!"+  nbr+ " guesses."; 
                        }
                        console.log(highscore)
                         return 'You winn'+"You guessed my number in "+  nbr + " guesses."; 

                     } 
                        nbr = nbr +1 ; 
                     return 'Nope! That wasnt it! The correct number was '+r ; 
     }
    return "player loses after exceeding the limit is 3"
}
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }
 /*6.Whenever a player wins, increase the difficulty by increasing the upperBound; whenever a player loses,
  decrease the difficulty by decreasing the upperBound.
 */
  var numberGuesses = 1 
  var highscore=1
  var upperBound =7
  var limitNumber = 7  


  function guessMyNumber(n) {  
      var r = randInt(upperBound )  
      if (limitNumber <= 7)
      {
                      if (n > upperBound ) {   
                                       return 'Out of bounds! Please try a number between 0 and   '+upperBound ; 
               } else if (n === r) 
                      {
                          if(numberGuesses < highscore)
                          {  
                              highscore = numberGuesses
                              upperBound -- ;
  
                   return "You guessed my number with the lowest number of guesses!"+  numberGuesses + " guesses."; 
                          }  
                          upperBound -- ;
                          return 'You winn'+" You guessed my number in "+  numberGuesses + " guesses."; 
  
                       } 
                          upperBound -- ;
                          limitNumber -- ;
                          numberGuesses ++ ;
  
                       return 'Nope! That wasnt it! The correct number was '+upperBound ;   
       }
      return "player loses after exceeding the limit is 7 "
  
  }  
   function randInt(n) { 
   return Math.floor(Math.random() * (n + 1)) 
   }
   /*
7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low.
 You may want to increase the upperBound on the guess.
   */
 var numberGuesses = 1 
 var highscore=1
 var upperBound =7
 var limitNumber = 7


 function guessMyNumber(n) { 
     var r = randInt(upperBound )
 
     if (limitNumber <= 7)
     { 
             if (n > upperBound ) {   
                    return 'Out of bounds! Please try a number between 0 and   '+upperBound ; 
              } else if (n === r) 
                     {
                         if(numberGuesses < highscore)
                         { 
                             highscore = numberGuesses
                             upperBound -- ;
 
                  return "You guessed my number with the lowest number of guesses!"+  numberGuesses + " guesses."; 
                         } 
                         upperBound -- ;
                         return 'You winn'+" You guessed my number in "+  numberGuesses + " guesses."; 
 
                      } else if(n>r){
                         upperBound -- ;
                         limitNumber -- ;
                         numberGuesses ++ ;
 
                      return 'Nope! your  is  too high ! The correct number was '+ upperBound ; 
                     }else
                         upperBound -- ;
                         limitNumber -- ;
                         numberGuesses ++ ;
 
                      return 'Nope ! your  is  too Low ! The correct number was '+upperBound ;  
 
      }
     return "player loses after exceeding the limit is 7 "
 
 } 
  function randInt(n) { 
  return Math.floor(Math.random() * (n + 1)) 
  }