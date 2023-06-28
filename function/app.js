// function sum(c){
//     let a = 10;
//     let b = 20;
//     console.log(a + b +c);
// }


// //function calling 
// sum(30);

// function vyas(x , y = 20){
//  console.log(x);
//  console.log(y);
// }



// console.log(vyas(10));


function greadcal(markes){

    if(markes>= 80){
           return 'A+';
    }
    else if(markes >= 60){
        return 'a';
    }
    else if(markes >= 40){
        return 'b';
    }
    else  if (markes >= 20){
        return 'c';
    } else{
        return 'f';
    }
}

console.log(greadcal('jigar'));
