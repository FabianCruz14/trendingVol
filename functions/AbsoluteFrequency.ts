// here we create a function that count our values to create a frequence table

// after a deep analyzing, we accord a method who compute the average of any action to value
// only we need an array with all values, kind of action not matters

export function avgDoubleNegative (arr:number[]){
    // we define the frecuency to calcule
    let absoluteFrequency: number = 0;
    let relativeFrecuency: number =0;

    // this bucle calcule the fi to uses afer
    for (let i= 0; i < arr.length ; i++){
        if (arr[i] === -2){
            absoluteFrequency++;
        }
    }

    // to calcule the relative frecuency, we need divide fi/N
    //  where N is the length of arrays of values 
    // F = f * N 
    relativeFrecuency = (absoluteFrequency/ arr.length);

    // parcial represents the value of this action (-2), that means:
    // parcial is the sum of all values in the array
    let parcial: number = ((-2) * (absoluteFrequency));

    // avg represent the percentage, that means:
    // percentage that player fail only in this action 
    let avg = (relativeFrecuency * 100);

    return {
        absolute : absoluteFrequency,
        relative : relativeFrecuency,
        parcial,
        xGame : avg
    }
}

export function avgNegative (arr : number []){
    let absoluteFrequency : number = 0;
    let relativeFrecuency : number =0;
    
    for (let i=0; i<arr.length; i++){
        if (arr[i] === -1){
            absoluteFrequency++;
        }
    }
    relativeFrecuency = (absoluteFrequency/ arr.length);

    // parcial represents the value of this action (-2), that means:
    // parcial is the sum of all values in the array
    let parcial: number = ((-2) * (absoluteFrequency));

    // avg represent the percentage, that means:
    // percentage that player fail only in this action 
    let avg = (relativeFrecuency * 100);

    return {
        absolute : absoluteFrequency,
        relative : relativeFrecuency,
        parcial,
        xGame : avg
    }
}









function frqRelativeDoubleP (fi : number){
    let hi : number =0
}

// function to compute all frequencytable









// function frqNegative(arr:number[]) : number{
//     let counter : number =0;
//     for (let i=0; i<arr.length;i++){
//         if (arr[i] === -1){
//             counter++;
//         }
//     }
//     return counter;
// }

// function frqZero (arr : number []) : number {
//     let counter : number =0;
//     for (let i =0; i<arr.length; i++){
//         if (arr[i] === 0){
//             counter++;
//         }
//     }
//     return counter;
// }

// function frqPositive (arr : number []) : number {
//     let counter : number = 0;
//     for ( let i = 0; i<arr.length ; i++){
//         if(arr[i] === 1){
//             counter++;
//         }
//     }
//     return counter;
// }

// function frqDoubleP (arr: number []) : number {
//     let counter : number = 0;
//     for (let i=0; i<arr.length;i++){
//         if (arr[i] === 2) {
//             counter++;
//         }
//     }
//     return counter;
// }

// export function frecuencyAbs (arr : number[]){
//     return {
//         doubleNegative : frqDoubleN(arr),
//         negative : frqNegative (arr),
//         zero : frqZero (arr),
//         positive : frqPositive (arr),
//         doublePositive : frqDoubleP (arr)
//     }
// }

// examples
// from any array of values, get a frequency table with this values

// 1.- [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2]

const AttacksFabian:number [] = [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2];
// const absoluteFrequence= frecuencyAbs(AttacksFabian);
// console.log(absoluteFrequence.negative)


