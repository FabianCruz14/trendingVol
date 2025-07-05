// here we create a function that count our values to create a frequence table

// after a deep analyzing, we accord a method who compute the average of any action to value
// only we need an array with all values, kind of action not matters


// The function below helps us to calculate the frequency values
//  with only the matrix and the value to be counted
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
    const relativeFrq = Math.round (relativeFrecuency*100)/1000;
    
    parcial = (absoluteFrequency) * (value);
    avgXG = (relativeFrecuency) * 100;
    const avg = Math.round(avgXG*100)/100;
    return{
        absoluteFrequency,
        relativeFrq,
        parcial,
        avg
    }
}

const AttacksFabian:number [] = [-2,2,-1,2,1,0,1,2,-2,1,1,2,2];
// const absoluteFrequence= frecuencyAbs(AttacksFabian);
// console.log(absoluteFrequence.negative)

const avgFabian = calculeFrecuency(AttacksFabian, -2);
console.log(avgFabian);