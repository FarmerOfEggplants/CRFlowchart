import { useState } from "react";

type connectArrowProps = {
    svgX: number;
    svgY: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    boxWidth: number;
    text: string;
}
// export function ConnectArrow() {
//     return (
//       <div>
//         <svg width="200" height="100" style={{ border: "1px solid red", zIndex: 6 }}>
//           <defs>
//             <marker
//               id="testArrowhead"
//               markerWidth="10"
//               markerHeight="7"
//               refX="10"
//               refY="3.5"
//               orient="auto"
//               fill="black"
//             >
//               <polygon points="0 0, 10 3.5, 0 7" fill="black" />
//             </marker>
//           </defs>
//           <line
//             x1="20"
//             y1="50"
//             x2="180"
//             y2="50"
//             stroke="black"
//             strokeWidth="2"
//             markerEnd="url(#testArrowhead)"
//           />
//         </svg>
//       </div>
//     );
//   }
  
const markerIdc = "arrowhead"; // unique ID
export function ConnectArrow({svgX,svgY,x1,y1,x2,y2,text,boxWidth} : connectArrowProps) {
    const [showing, notShowing] = useState(false);
    const X1num = Number(x1);
    const X2num = Number(x2);
    const Y1num = Number(y1);
    const Y2num = Number(y2);
    
    const Xcenter = ((X1num + X2num) / 2);
    const Ycenter = ((Y1num + Y2num) / 2);
    const handleClick = () => {
        notShowing(prev => !prev);
    }
    const [hover, setHover] = useState(false);
    return (
    <div>
    <svg width={svgX} height={svgY} style={{zIndex: 1, position: "absolute", padding: "3px"}}>
        
        <defs>
            <marker
                id="url(#arrowhead)"
                markerWidth={100}
                markerHeight={100}
                refX={0}
                refY={3.5}
                orient="auto"
                
            >
                <polygon points="0 0, 10 3.5, 0 7" fill="red"/>
            </marker>
        </defs>
        <line
            onClick={handleClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke= {hover ? "#e86471" : "red"}
            strokeDasharray={"5, 5"}
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
            />
        
        
       
    </svg>
    {showing && (
        <div style={{width: boxWidth, padding: "4px", backgroundColor: "white", position: "absolute", left: (Xcenter - boxWidth / 2), top: Ycenter + 20, zIndex: 2}}>
            {text}

        </div>
    )}
    </div>
    );
}

export default {ConnectArrow};