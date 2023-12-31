//1 sum
function sum(numbeer) {
    if (number==0)
    {
        return 0
    }
    return number+sum(number-1)
}
//2 fact
function fact(number){
    if(number===1)
    {
        return 1
    }
    return number*fact(number-1)
}
//3 repeatString
function repeatString (string,number) {
    if (number<=1)
    {
        return string
    }
    return string + " "+repeatString(string,number-1)
}
//4 multiplyBy10
function multiplyBy10 (a,b) {
    if (b===0)
    {
        return a
    }
    return 10*multiplyBy10(a,b-1)
} 
//4 sumBetween
function sumBetween (start,end) {
    if (start>end)
    {
        return sumBetween(end,start)
    }
    if (end===start)
    {
        return start
    }
    return end + sumBetween(start,end-1)
}
//5 aad
function add(number1, number2) {
    if(number2===0)
    {
        return number1
    }
    return add(inc(number1),dec(number2))
    
}
//6 isEven
function isEven (number) {
    if (number===0)
    {
        
         return false   
    }
    else if (number===1)
    {
        return true
    }
    return isEven(number-2)
    
}
//7range
function range(number1,number2,array=[]) 
{
    if (number2===number1+1)
    {
       
        return   array
    }
    array.unshift(number2-1)
       
    return range(number1,number2-1,array)
    
}


