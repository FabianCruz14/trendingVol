// to good practice, we define here a interfaces and types


export interface PlayerCardProps {
    // this interface its to show a player info
    name: string;
    lastName: string,
    imageUri: string;
    position: string;
    team: string;
    jerseyNumber: number;
    height: number;
    weight: number;
    kill: number;
    assist: number;
    err: number;
}

export interface ButtonProps {
    // in this interface define a properties who need to show a botton to get data
    name : string;
    playerNum : number;
}

// in the bellow types define the actions to record
// Action is type of each game-action to count and then record this data (action + value) in a Database
// thats means Action can be "Serve", "Kill", "Assist", "Dig" or "Block"
// and Value can be -2, -1, 0, 1, 2
export type Action = 'Serve' | 'Block' | 'Dig' | 'Assist' | 'Kill' ;
export type Value = -2 | -1 | 0 | 1 | 2;

// in the bellow interface we define a data who need to info for user, in this case called Selection
// Selection had 2 properties, action and value, thats means they need this data 
export interface Selection{
    // property action is of type Actions
    action: Action;
    value: Value;
}

// interface to Frecuency table
export interface FrqTableProps{
    name : string;
    array : number[];
    action : string;
}