/**1.Write a function called sumOfN that takes a number as a parameter and returns the sum of that number and all the numbers before it. */
function sumOfN (n) {
    var sum = 0
    for(var i=0;i<=n;i++)
        {
            sum +=i
        }
    return sum 
}
/**2.Write a function called factorialOfN that takes a whole number as a parameter and returns the factorial of that number. */
function factorialOfN (n) {
    var sum =1
    for (var i=1 ; i<=n ;i++)
        {
            sum *= i ;
        }
    return sum;
    
}
/**3.Write a function called repeatString that takes two parameters, as string and a number, and returns that string the number of times specified in the second parameter. */
function repeatString(string,num) {
    var string2 = ''
    for (i=1;i<=num;i++)
        {
            string2 += string
        }
    return string2
}
/**4.Write a function called countMinMax that takes two numbers as parameters and returns the range. */
function countMinMax(min, max) {
return (max-min)
}  
/**5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum between the two integers beginning at the num1 and excluding num2. */
function sumMinToMax (min,max){
    var sum = 0;
    for(var i=1 ;i<b;i++)
    {

    }
}
//**7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number. */
function multiplyBy10NTimes(a,b) {
    var sum = a 
    for (var i = 1 ; i<=b ; i++){
        sum = sum * 10 
    }
    return sum    
}
function primeCounter (n) {
    var nbr =0
    
    for (i=4;i<=n;i++)
        {
            if(i%2!=0)
            {
                if (i%3!=0)
                {nbr++}
            }
        }
    return nbr
    
}