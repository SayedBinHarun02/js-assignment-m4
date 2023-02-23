// Problem 1 

function mindGame(number){
    if(typeof number!='number'){
        return 'Please enter a valid number';
    }
    const result=((((number*3)+10)/2)-5);
    return result;   
}



// Problem 2

function evenOdd(str){
    if(typeof str!='string'){
      return 'Please enter a valid string';
  }  
          if(str.length%2==0){
            return 'even';
          }
          else{
            return 'odd';
          }   
  }


 // Problem 3

 function isLGSeven(number){
    if(typeof number!='number'){
        return 'Please enter a number';
    }
    let result=number-7;
    if(result<7){
        return result;
    }
    else if(result>7){
        return number*2;
    }
 }


// Problem 4

function findingBadData(numbers) {
    if(typeof numbers!='object'){
      return 'Please enter an array of numbers';
      }
      let countNegative=0;
      for(i=0;i<numbers.length;i++){
          const element=numbers[i];
          if (element<0) {
              countNegative++;
            }      
      }
      return countNegative;
    }


 // Problem 5

 function gemsToDiamond(num1,num2,num3){
    if(typeof num1 !=='number' || typeof num2 !=='number' || typeof num3 !=='number'){
        return 'Please enter a number';
    }
   const n1=num1*21;
   const n2=num2*32;
   const n3=num3*43;
   let total=(n1+n2+n3);
   
    if(total>(1000*2)){
        total=total-2000;
        return total;
    }
    else if(total<1000){
        return total;
    }

 }