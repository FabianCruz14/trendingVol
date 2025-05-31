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

export interface BottonProps {
    // in this interface define a properties who need to show a botton to get data
    name : string;
    action : string;
}


