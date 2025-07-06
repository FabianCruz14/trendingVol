// here we create a function that count our values to create a frequence table

// after a deep analyzing, we accord a method who compute the average of any action to value
// only we need an array with all values, kind of action not matters

// The function below helps us to calculate the frequency values
//  with only the matrix and the value to be counted
export function calculeFrecuency (array : number[], value: number){
    // x = Σ(Xi*fi)/2n
    // x -> average of action
    // Xi -> value to find 
    // fi -> times value appear in array (absolute frecuency)
    // n -> total number of actions

    const n = array.length;
    // to calcule absolute frecuency use a .filter() who count the number of times the condition is met
    const absoluteFrequency = array.filter(a => a === value).length; 
    // to round a number, we use a .toFixed function (return a string) and + to convert to number
    const parcial = (absoluteFrequency * value);
    const avg = +((absoluteFrequency / n)* 100).toFixed(2);

    return{
        absoluteFrequency,
        parcial,
        avg
    }
}
