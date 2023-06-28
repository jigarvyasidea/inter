//promis

let Promise = new Promise(function(resolve , reject){
    setTimeout(function(){
        let data = "Hy Dosto ye Promise hai";
       resolve(data);
       
    }, 3000);
});

Promise.then( ()=> {
 console.log("Kaam ho gaya ")
})

.catch( ()=>{
    console.log('error aa raha hai ')
})