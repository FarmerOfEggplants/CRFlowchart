import { useState } from "react";

type eventButtonProps = {
    name: string;
    year: string;
    paragraph?: string;
    definition : string;
    fact1?: string;
    fact2?: string;
    fact3?: string;
    bwidth: number;
    boxwidth : number;
    positionX : number;
    positionY : number;
    color : string;
    color2 : string;
    colorHover: string;
    imagesrc : string;
    imagealt : string;
    imageSizeX : number;
    imageSizeY : number; 
    bwmultiplier?: number //optional
    bhmultiplier?: number //optional
};

export default function EventButton({name, paragraph, year, definition, bwidth, boxwidth, positionX, positionY, color, color2, colorHover, fact1, fact2, fact3, imagesrc, imagealt, imageSizeX, imageSizeY}: eventButtonProps) {
    const [hover, setHover] = useState(false);
    const [showing, notShowing] = useState(false);

    const handleClick = () => {
        notShowing(prev => !prev);
    }
    return (
        <div>
            <button
                style={{width: bwidth, padding: "5px", position: 'absolute', alignItems: "inherit", justifyContent: "inherit", border: '3px solid black', backgroundColor: hover ? color2 : colorHover, left: positionX,  top: positionY, fontSize: 25, zIndex: 4}}
                onClick={handleClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <h1 style={{fontSize: 10}}>
                    {year}
                </h1>
            
            {name}
            </button>
            {showing && (
                <div onClick={handleClick} style={{width: boxwidth, padding: "10px", position: "absolute", alignItems: "inherit", justifyContent: "inherit", background : color, border: '3px solid black', left: positionX, top: positionY, zIndex: 5 }}>
                    <img src={imagesrc} alt={imagealt} style={{width: imageSizeX, height:  imageSizeY, position: "relative", flexDirection: "inherit", justifyContent: "center"}}/>
                    <h2 style={{fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                        {definition}
                    </h2>
                    
                    <h3 style={{fontSize: 8, textAlign: "left"}}>
                        
                        {fact1 } <br/>
                        
                        {fact2} <br/>
                        
                        {fact3} <br/>
                    </h3>
                    
                    
                </div>
            )}
        </div>
        
    )
}