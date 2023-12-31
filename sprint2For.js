/**2.Write a function called primeCounter that takes a number as a parameter and returns the amount of prime numbers that occur before it. */
function primeCounter (n) {
    var nbr =2
    if(n===0)
    {return 0}
    else if(n<3)
    {
        return 1
    }else if (n===3)
    {
        return 2
    }

    for (i=4;i<n;i++)
        {
            if(i%2!=0)
            {
                if (i%3!=0)
                {nbr++}
            }
        }
    return nbr
    
}
/**3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character. */
function rockPaper(char) {
    var a=''
    while((char!=='p')&&(char!=='r')&&(char!=='s')){
        a=a+char
            return 'try another one'
}
    return true
}
/**.Write a function called sumOfFirstAndLast that takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string. */
function sumOfFirstAndLast(n) {
    last=n%10
    while (n>9)
        {
            n = Math.floor(n/10)
        }
    return last+n
    
}
/**Using a for loop THEN a while loop
 Write a JavaScript function that will iterate from 0 to n. For each iteration,
 it will check if the current number is odd or even, and display a message on the screen.
 iterateAndLog(3); =>
 Sample Output :
 "0 is even"
 "1 is odd"
 "2 is even" */
 //for
function iterateAndLog(n) {
    for(i=0;i<n;i++)
        {
            if(i%2!=0)
            {
                console.log(i+"is odd")    
            }else
            
            {console.log(i+"is even")}
        }
    
}
//while
function iterateAndLog(n) {
    var i=0
    while(i<n)
        {
             if(i%2!=0)
            {
                console.log(i+"is odd")
                i++
            }else
            
            {
                console.log(i+"is even")
                i++
            
            }
        }
        
}
/*******************************  3  *********************
 Using a for loop THEN a while loop
 Write a function that:
 Loop through the numbers 1 to n
 If the number is divisible by 3, print "Julia"
 If the number is divisible by 5, print "James"
 If the number is divisible by 3 and 5, print "JuliaJames"
 If the number is not divisible by 3 or 5, print the number */
 //for

 function weirdDivisionWithFor(n) {
    for(i=1;i<=n;i++)
        {
            if(i%3===0)
            {
                if ((i%5===0))
            {
                console.log(i  +" is JamesJulia")
            

            }
                else
                {console.log(i  + " Julia" )}
               
            }
            else if (i%5===0)
            {
                console.log(i  + " James" )
                
            }
            
            else if ((i%5!=0)||(i%3!=0))
            {
                console.log(i)
                
            }
        }
}
//while
function weirdDivisionWithFor(n) {
    var i= 1 ;
    while (i <= n)
        {
            if(i%3===0)
            {
                if ((i%5===0))
            {
                console.log(i  +" is JamesJulia")
                i++

            }
                console.log(i  + " Julia" )
                i++
            }
            else if (i%5===0)
            {
                console.log(i  + " James" )
                i++
            }
            
            else if ((i%5!=0)||(i%3!=0))
            {
                console.log(i)
                i++ 
            }
            
        }
}
/*****************************  4  ***********************
Using a for loop THEN a while loop
Write a function called laugh() that takes one parameter,
num that represents the number of "ha"s to return.
laugh(6); => "hahahahahaha" */
//for
function laugh(n){
    var msg=''
    for(i=1;i<=n;i++)
    {
        msg=msg+'hi'
    }
    return msg
}
//while
function laugh(n){
    var msg=''
    var i=1
    while(i<=n)
    {
        msg=msg+'hi'
        i++
    }
    return msg
}
/*****************************  5  ***********************
Using a for loop THEN a while loop
Write a function that takes a string and returns the same string reversed
reverse('abc'); => 'cba'
reverse('erf4') => '4fre'*/
//for
function reverseString(string) { 
    var msg=''
    for(i=string.length;i>=0;i--)
    {
        msg +=string.charAt(i)
    }
    return msg
}
//while
function reverseString(string) { 
    var msg=''
    var i=0 
    while(i<=string.length)
    {
        msg = string.charAt(i)+msg
        i++
    }
    return msg
}
/*******************************  6  **********************
 Using a for loop OR a while loop
 You are given an integer. Return the sum of its digits.
 Example:
 addDigits(29); => 11
 addDigits(90); => 9
 addDigits(1231635132132); => 33 */
 function addDigits(n){
    var string = Integer.toString( n);
    return string
 }


                
                