//1 stringLength
function stringLength (string) {
    var nbr=0
    if (string==='')
    {
    
         return nbr
    }
    nbr++
    
    console.log(string.slice(1))
    return nbr+stringLength(string.slice(1))
}
//2 modulo
function modulo(a,b) {
    if (a<b)
    {return a}
    else if (a-b<0)
    {return a}
    return modulo(a-b,b)
    
}
//3 countChars
function countChars (string,char) {
    var nbr=0
    if(string==='')
    {
        return nbr
    }if (string[0]===char)
    {
        nbr++
    }
    
    return   nbr+countChars(string.slice(1),char)
}
//4 indexOf
function indexOf (string,char) {
    var index=0
    if(string==='')
    {
        return index
    }else if (string[0]===char)
    {
        return index
    }
    index++
    
    return index+indexOf(string.slice(1),char)
}
//5 power
function power(base,exp) {
   
    if(exp===0)
    { return 1}
    else if(exp===1)
    {
        return base
    }
    return base *power(base,exp-1)
    
}
//6 reverseString 

function reverseString (string) {
    var string2=''
    if(string==="")
    {
        return string2
    }
    string2=string[0]+string2
    return reverseString(string.slice(1))+string2
    
}
// GCD
function greatestCommonDivisor(n1,n2) {
    if(n1===n2)
    {return n2}
    else if (n1>n2)
    {
        return greatestCommonDivisor(n1-n2,n2)
    }
     return greatestCommonDivisor(n1,n2-n1)
    
}
//LCM
function lowestCommonMultiple (n1,n2) {
    if (n1%n2===0)
      {
          return n1
      }
    
      else if (n2>n1)
      {
          return lowestCommonMultiple(n2,n1)
      }else
      
      return lowestCommonMultiple(n1+n1,n2)
      
  }
  //
  function numberOfHandshakes (number) {
    var s=0
    if (number===2)
    {
        return 1
    }
    else if (number===3)
    {
        return 3
    }else
    s+=number-1
    return s+numberOfHandshakes(number-1)

}