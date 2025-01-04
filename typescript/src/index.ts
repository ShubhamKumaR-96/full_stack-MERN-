// let x:number=10;
// x="shubham";

// console.log(x);

// function greeting(name:string){
//     return "hello" + name
// }

// greeting("shubham")


// function sum(a:number,b:number){
//     console.log(a+b);
// }
// sum(10,30)


// function callinside(){
//     console.log("inside call");
// }

// function anotherFn(callinside:Function){ 
//     ()=>{
//         setInterval(()=>{
//             callinside();
//         },1000)
//     }
//     console.log("inside anotherFn");
// }
// anotherFn(callinside)


function callDeplayed(anthrFn:()=>void){
    setTimeout(anthrFn,2000)
}

function log(){
    console.log("hello");
}

callDeplayed(log)
