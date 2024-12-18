import { MouseEventHandler } from "react";


export interface CustomButtonProps {

    title : string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit"; 
}

export interface SearchMenuFacturerProps{
    manufacturer:string,
    setManuFacturer:(manufacturer:string)=> void,
}