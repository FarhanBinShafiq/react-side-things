  function add(num1,num2){
     return num1+num2;
 }

 function multiply(num1,num2){
    return num1*num2;
}

function substract(num1,num2){
    return num1-num2;
}

function division(num1,num2){
    return num1/num2;
}

//Reducer
const jinish=[
    {id:1,name:'Alta',price:25},
    {id:2,name:'Nail Polish',price:500},  
    {id:3,name:'Face Mask',price:255},
    {id:4,name:'Mascara',price:590}  
]

let total=0;
for(const jini of jinish){
    total=total+jini.price;
}



const jinishReducer=(previous,current)=>previous+current.price;
const jinishTotal=jinish.reduce(jinishReducer,0)



export { add, multiply, substract, division}