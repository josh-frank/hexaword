export default function HexagonLogo( { text, size, negative } ) {

    const hexagonPoints = "120,60 90,112 30,112 0,60 30,8 90,8";

    return <svg
        width="820"
        height="170"
        viewBox="0 0 820 170"
        style={ size ? { width: size, height: "auto" } : null }
    >
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="60"
            y="80"
        >
            { text[ 0 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
            transform="translate( 100 60 )"
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="160"
            y="140"
        >
            { text[ 1 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
            transform="translate( 200 0 )"
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="260"
            y="80"
        >
            { text[ 2 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
            transform="translate( 300 60 )"
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="360"
            y="140"
        >
            { text[ 3 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
            transform="translate( 400 0 )"
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="460"
            y="80"
        >
            { text[ 4 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
            transform="translate( 500 60 )"
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="560"
            y="140"
        >
            { text[ 5 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
            transform="translate( 600 0 )"
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="660"
            y="80"
        >
            { text[ 6 ] }
        </text>
        <polygon
            points={ hexagonPoints }
            style={ { fill: negative ? "white" : "black" } }
            transform="translate( 700 60 )"
        >
        </polygon>
        <text
            className="cell-letter"
            fill={ negative ? "black" : "white" }
            textAnchor="middle"
            x="760"
            y="140"
        >
            { text[ 7 ] }
        </text>
    </svg>;

}