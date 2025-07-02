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
        const rltFrq = Math.round(relativeFrecuency*100)/100;


    // parcial represents the value of this action (-2), that means:
    // parcial is the sum of all values in the array
    let parcial: number = ((-2) * (absoluteFrequency));

    // avg represent the percentage, that means:
    // percentage that player fail only in this action 
    let percent:number = (relativeFrecuency) * 100;
    const avg = Math.round(percent*100)/100;

    return {
        absolute : absoluteFrequency,
        relative : rltFrq,
        parcial,
        xGame : avg
    }
}

export function avgNegative (arr : number []){
    let absoluteFrequency : number = 0;
    let relativeFrecuency : number =0;
    // parcial represents the value of this action (-2), that means:
    // parcial is the sum of all values in the array
    let parcial: number = 0;
    
    for (let i=0; i<arr.length; i++){
        if (arr[i] === -1){
            absoluteFrequency++;
        }
    }


    relativeFrecuency = (absoluteFrequency/ arr.length);
    const rltFrq = Math.round(relativeFrecuency*100)/100;

    parcial = (absoluteFrequency) * (-1);
    // avg represent the percentage, that means:
    // percentage that player fail only in this action 
    let percent:number = (relativeFrecuency) * 100;
    const avg = Math.round(percent*100)/100;

    return {
        absolute : absoluteFrequency,
        relative : rltFrq,
        parcial,
        xGame : avg
    }
}

export function avgZero (arr: number[]){
    let absoluteFrequency : number = 0;
    let relativeFrecuency : number = 0;
    let parcial : number = 0;

    // to count the absolute frecuency of 0, that means: 
    // times it repeat an action with 0 of value
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] === 0){
            absoluteFrequency++;
        }
    }

    // to calcule the relative frecuency, we need divide:
    // relative frecuency = (abs frq) / (N)
    // N = trys (arr.length)
    relativeFrecuency = (absoluteFrequency) / (arr.length);
    const rltFrq = Math.round(relativeFrecuency*100)/100;

    // parcial is the producto of value multipled by the number of times it was made
    parcial = (0) * (absoluteFrequency);

    // avg is the percent of this action
    let percent:number = (relativeFrecuency) * 100;
    const avg = Math.round(percent*100)/100;

    return {
        absolute : absoluteFrequency,
        relative : rltFrq,
        parcial,
        xGame : avg
    }
    
}

export function avgPositive (arr: number[]){
    let absoluteFrequency : number = 0;
    let relativeFrecuency : number = 0;
    let parcial : number = 0;

    // to get absolute frequency we need count times that the value it repeat
    for (let i = 0 ; i< arr.length ; i++){
        if (arr[i] === 1){
            absoluteFrequency++;
        }
    }
 
    // to get relative frq we need divede abs frq by arr.length
    relativeFrecuency = ((absoluteFrequency) / arr.length );
    const rltFrq = Math.round(relativeFrecuency*100)/100;



    // to get parcial we need multipled the value by the number of times it was repeat
    parcial = (absoluteFrequency) * (1) ;

    // avg is the percent of this action
    let percent:number = (relativeFrecuency) * 100;
    const avg = Math.round(percent*100)/100;

    return {
        absolute : absoluteFrequency,
        relative : rltFrq,
        parcial,
        xGame : avg
    }
}

export function avgDoublePositive (arr : number []){
    let absoluteFrequency : number = 0;
    let relativeFrecuency : number = 0;
    let parcial : number =0;
    
    // to get the best values of this action we need a for and return this value
    for (let i = 0; i<arr.length; i++){
        if ( arr[i] === 2){
            absoluteFrequency++;
        }
    }

    relativeFrecuency = (absoluteFrequency) / (arr.length);
        const rltFrq = Math.round(relativeFrecuency*100)/100;

    parcial = (absoluteFrequency) * (2);
    let percent:number = (relativeFrecuency) * 100;
    const avg = Math.round(percent*100)/100;

    return {
        absolute : absoluteFrequency,
        relative : rltFrq,
        parcial,
        xGame : avg
    }
}

// function bellow can help us to calculate a frecuency values only with 
// array & value to count
export function calculeFrecuency (array : number[], value: number){
    let absoluteFrequency : number =0;
    let relativeFrecuency : number =0;
    let parcial : number=0;
    let avgXG : number =0;

    for (let i =0; i<array.length;i++){
        if ( array[i] === value){
            absoluteFrequency++
        }
    }
    // const absolute = Math.round(absoluteFrequency*100) / 100;

    relativeFrecuency = (absoluteFrequency) / (array.length);
    const relativeFrq = Math.round (relativeFrecuency*100)/100;

    parcial = (absoluteFrequency) * (value);
    avgXG = (relativeFrecuency) * 100;
    const avg = Math.round(relativeFrecuency*100)/100;
    return{
        absoluteFrequency,
        relativeFrq,
        parcial,
        avg
    }
}









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


