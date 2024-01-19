
export default function IconDot({width, height, r, color}: {width:number, height:number, r:number, color:string}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${width}px`}
            height={`${height}px`}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
        >
            <circle cx={width / 2} cy={height / 2} r={r} fill={color}/>
        </svg>
    );
}