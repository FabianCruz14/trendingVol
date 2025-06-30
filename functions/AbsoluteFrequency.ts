// here we create a function that count our values to create a frequence table

// after a deep analyzing, we accord a method who compute the average of any action to value
// only we need an array with all values, kind of action not matters

function frqDoubleN (arr:number[]) : number {
    let counter : number = 0;
    for (let i:number = 0; i < arr.length ; i++){
        if (arr[i] === -2){
            counter++;
        }
    }
    return counter;
}

function frqNegative(arr:number[]) : number{
    let counter : number =0;
    for (let i=0; i<arr.length;i++){
        if (arr[i] === -1){
            counter++;
        }
    }
    return counter;
}

function frqZero (arr : number []) : number {
    let counter : number =0;
    for (let i =0; i<arr.length; i++){
        if (arr[i] === 0){
            counter++;
        }
    }
    return counter;
}

function frqPositive (arr : number []) : number {
    let counter : number = 0;
    for ( let i = 0; i<arr.length ; i++){
        if(arr[i] === 1){
            counter++;
        }
    }
    return counter;
}

function frqDoubleP (arr: number []) : number {
    let counter : number = 0;
    for (let i=0; i<arr.length;i++){
        if (arr[i] === 2) {
            counter++;
        }
    }
    return counter;
}

export function calculateFrecuancies (arr : number[]){
    return {
        doubleNegative : frqDoubleN(arr),
        negative : frqNegative (arr),
        zero : frqZero (arr),
        positive : frqPositive (arr),
        doublePositive : frqDoubleP (arr)
    }
}

// examples
// from any array of values, get a frequency table with this values

// 1.- [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2]

const AttacksFabian:number [] = [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2];
const absoluteFrequence= calculateFrecuancies(AttacksFabian);
console.log(absoluteFrequence.negative)


