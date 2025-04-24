import { useState } from "react";

type flowArrowProps = {
    svgX: string;
    svgY: string;
    x1: string;
    y1: string;
    x2: string;
    y2: string;
}

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
export function FlowArrow({svgX,svgY,x1,y1,x2,y2} : flowArrowProps) {
    <svg width={svgX} height={svgY}>
        <defs>
            <marker
                id="arrowhead"
                markerWidth={10}
                markerHeight={7}
                refX={0}
                refY={3.5}
                orient="auto"
            >
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
            </marker>
        </defs>
        <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
  />
    </svg>
}
export function ConnectArrow({svgX,svgY,x1,y1,x2,y2,text,boxWidth} : connectArrowProps) {
    const [showing, notShowing] = useState(false);

    const handleClick = () => {
        notShowing(prev => !prev);
    }
    return (
    <div>
    <svg width="200" height="200">
        <defs>
            <marker
                id="arrowhead"
                markerWidth={10}
                markerHeight={7}
                refX={0}
                refY={3.5}
                orient="auto"
            >
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
            </marker>
        </defs>
        <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="red"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
            onClick={handleClick}/>
        
        
        
    </svg>
    {showing && (
        <body style={{width: boxWidth, padding: "4px", backgroundColor: "white"}}>
            {text}

        </body>
    )}
    </div>
    );
}

export default {ConnectArrow, FlowArrow};