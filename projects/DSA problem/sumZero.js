// sum of array pair



function sum(array){
    for(let number of array){
        let result;
        for(let j=1; j<array.length; j++){
            if(result = number + array[j]){
                console.log(result);
            }
    
        }
    }
    
}

const output=sum(12, 34, 10, 6, 40);
console.log(output);