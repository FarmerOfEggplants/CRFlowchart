import { useState } from "react";

type flowArrowProps = {
    svgX: string;
    svgY: string;
    x1: string;
    y1: string;
    x2: string;
    y2: string;
}
const markerId = "arrowhead"; // unique ID
export function FlowArrow({svgX,svgY,x1,y1,x2,y2} : flowArrowProps) {
    return (
    <svg width={svgX} height={svgY} style={{position: "absolute"}}>
        <defs>
            <marker
                id={markerId}
                markerWidth={100}
                markerHeight={100}
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
)}