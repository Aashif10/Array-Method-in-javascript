// let add=(a,b)=>(a+b);
// let sub=(a,b)=>(a-b);
// let mul=(a,b)=>(a*b);
// let divide=(a,b)=>(a/b);

// function calculator(task,c,d){
//     return task (c,d);
     
// }
// let result=calculator(add,10,300)
// console.log(result);

// function outer(){
//     let a=20;
//     // console.log(a);
//     function inner(){
//         ++a;
//         // let a=50;
//         console.log(a);
       
//     }
//     return inner
// }
// let result=outer();
// result();


// let array=[10,20,30,40,50,60,70,80,90,100];
// array.forEach(element => {
    //     console.log(element);
    // });
    
//     let array=[10,20,30,40,50,60,70,80,90,100];
//    array.forEach(element => {
//     let result=element+1;
//     console.log(result);
    
//    });


// let array=[10,20,30,40,50,60,70,80,90,100];
// for(let element in array){
//     console.log(element);
// }

// let array=[10,20,30,40,50,60,70,80,90,100];
// for(let element of array){
//     console.log(element);
// }



// let array=[10,20,30,40,50,60,70,80,90,100];
// for(let value of array){
//     if(value%2===0)
//     {
//         console.log(value);
//     }
// }

// const array1 = [10,20,30,40,50,60,70,80,80,90,100];

// for (const element of array1) {
//     if(element%4 == 0){
//         console.log(element);
//     } 
// }

// Array Method
// push()= it used to insert element at the last index of Array.
// it return the length of the array

// const array = [10,20,30,40,50,60,70,80,80,90,100];
 
// array.push(110);
// console.log(array);

// pop()= it used to delete element at the last index of array
// it return deleted Element.


// const array = [10,20,30,40,50,60,70,80,80,90,100];
// array.pop();
// console.log(array);
// array.pop()
// console.log(array);

// splice()= it used to perform insertion deletion and updation .
// it will modify original array
// it return deleted elment

// const array = [10,20,30,40,50,60,70,80,80,90,100];
// array.splice(1,0,360)
// console.log(array);

// const array = [10,20,30,40,50,60,70,80,80,90,100];
// array.splice(4,1,500)
// console.log(array);

// const array = [10,20,30,40,50,60,70,80,80,90,100];
// array.splice(5,0,600)
// console.log(array);

// slice()= it used to copy array element 
// it will not modify the origina array
// it return array of copied element

// const array = [10,20,30,40,50,60,70,80,80,90,100];
// let array1 = array.slice(0,5)
// console.log(array1);

// indexOf() = it used to get index of array element
//  it element is available it return element index but it element is not available it return -1
// const array = [10,20,30,40,50,60,70,80,80,90,100];
// console.log(array.indexOf(70)
// );

// include() = it used to check element is availble or not
// if elemetn is available then return true
//  if element is not available the return false
// const array = [10,20,30,40,50,60,70,80,80,90,100];
// let array1= array.includes(50)
//  console.log(array1);

// reverse() = it used to reverse  array element
// it will  modify the original array
// const array = [10,20,30,40,50,60,70,80,80,90,100];
// let arr=array;// Here copu of array 
// // let arr=array.reverse()
// arr.reverse()
// console.log(arr);
// console.log(array);


// sort()= it will the modify the original array
// if callback return -negative value then it will sort array accending order
// if callback return +positive value then it will sort array decending order
// const array = [10,20,30,40,50,60,70,80,80,90,110,100];
// let arr=array.sort((a,b)=>b-a);
// console.log(arr);

// Map() = it is a higher order function
// it is used to iterate over array
// it will not modify the original array
// it return the new array
// the value return by callback function will be inserted in new array . 
// if if does not return anything "undefind" will be stored.

// const array = [10,20,30,40,50,60,70,80,80,90,100];

//  let arr=array.map(value=>value*5)
// {
//     console.log(arr);
// }
// let array=["aashif",44,true,false,29n, null,"khan"]
// let arr=array.map(value=>Number(value))
// console.log(arr);
// console.log(array);

// filter()= it is 