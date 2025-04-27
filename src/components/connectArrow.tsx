import { useState } from "react";

type connectArrowProps = {
    svgX: string;
    svgY: string;
    x1: string;
    y1: string;
    x2: string;
    y2: string;
    boxWidth: number;
    text: string;
}

export function ConnectArrow({svgX,svgY,x1,y1,x2,y2,text,boxWidth} : connectArrowProps) {
    const [showing, notShowing] = useState(true);

    const handleClick = () => {
        notShowing(prev => !prev);
    }
    return (
    <div>
    <svg onClick={handleClick} width={svgX} height={svgY} style={{zIndex: 6}}>
        
        <defs>
            <marker
                id="arrowhead"
                markerWidth={100}
                markerHeight={100}
                refX={0}
                refY={3.5}
                orient="auto"
                fill="#ff1900"
            >
                <polygon points="0 0, 10 3.5, 0 7" fill="#ff1900"/>
            </marker>
        </defs>
        <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#ff1900"
            strokeWidth={4}
            markerEnd="url(#arrowhead)"
            />
        
        
        
    </svg>
    {showing && (
        <div style={{width: boxWidth, padding: "4px", backgroundColor: "white"}}>
            {text}

        </div>
    )}
    </div>
    );
}

export default {ConnectArrow};