/*1.Write a function called sumOfN that takes a number as a parameter and returns 
the sum of that number and all the numbers before it. */
function sumOfN (number){
    var resultat = 0 ;
    while (number>0)
    {
        resultat = resultat + number
        number -- ;

    }
    return resultat ;
}
/*2.Write a function called factorialOfN that takes a whole number
 as a parameter and returns the factorial of that number. */
function factorialOfN (n){
    var resultat = 1
    if (n<=0)
    {
        return 0
    }
    while (n>=1)
    {
        resultat = resultat * n ;
        n -- ;

    }
    return resultat;
}
/*3.Write a function called repeatString that takes two parameters,
 as string and a number, and returns that string the number of times specified in the second parameter.*/ 
function repeatString (string , num){
    while (num>0){
        console.log(string);
        num -- ;
    }
}

/*4.Write a function called countMinMax that takes
 two numbers as parameters and returns the range.*/
 function countMinMax (min,max) {
    return Math.abs(max-min)
     
 }
 /*5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum between the two integers 
 beginning at the num1 and excluding num2.*/
 function sumMinToMax(min,max) {
    var sum = 0
    while (max-min > 0)
        {
            sum += min
            min ++ ;
        }
    return sum
    
}
/**6.Write a function called productMinToMax that takes two numbers as parameters and returns the 
 * 
 * product between the two integers beginning at the num1 and excluding num2. */

function productMinToMax(min,max) {
    var prod = 0
    while (max-min > 0)
        {
            prod *= min
            min ++ ;
        }
    return prod    
}
/**7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number. */
function multiplyBy10NTimes(a,b){
    var sum = a
    while (b>0)
    {
        sum = sum * 10;
        b--; 

    }
    return sum
}
/**8.Write a function called countCharAtIndex that takes three parameters, a string, an index,
 *  and another string. This function should use the index to find the corresponding character in the first string and loop through the second string and count how many times that character occurs. */
function countCharAtIndex (string1 , index , string2 ) {
    var long = string2.length
    var nbr = 0
    var counter = 0 

    while (counter < long)
    {
        if (string1[index]===string2[counter])
        {
            nbr ++ 
        }
        counter ++ ;

    }
    return nbr
}
/**More Practice
 * 1.Write a function called reverseString that takes a string as an input and returns that string in reverse.
 */
function getIndexOf (string) {
    var long = string.length;
    var string2 =''
    while (long>= 0)
        {
            string2 = string2 + string.charAt(long)
            long -- ;
            
        }
    return string2 ;
    
    
}
/**2.Write a function called getIndexOf that takes two parameters, a string, and a character, and returns the first position of the character in that string. */
function getIndexOf (string , char) {

    var conteur =0
    var long = string.length

    while (conteur<long)
        {
            if (string.charAt(conteur)===char)
            {
                return conteur;
                
            }
                conteur ++;

        }
    
}