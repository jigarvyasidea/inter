// let person = {
//     //key : val 
//     name : 'mohit',
//     age : 21,
//     ismale : true
//     //function 
//     Abc : function(){

//     }
// }



// let person2 = person;

// console.log(person2.age);

// console.log(person['name']);
// console.log(person['age']);




// console.log(person.name);


// let arr  = [10 , 20, 30, 40];

// console.log(arr[2]);


let obj = {
    name :'jigar',
    cn : 50,
    web : 100,
    math : 10,
    total : function(){
        return(this.math + this.web + this.cn );
    },
    Bulao : function(){
        return(`${this.name} ko bulao`);
    },
}


console.log(obj.total());
console.log(obj.Bulao());

