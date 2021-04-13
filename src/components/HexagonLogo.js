export default function HexagonLogo( { small, negative } ) {

    const hexagonPoints = "120,60 90,112 30,112 0,60 30,8 90,8";

    return <svg
        width="820"
        height="170"
        viewBox="0 0 820 170"
        style={ small ? { width: "25%", height: "auto" } : null }
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
            H
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
            E
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
            X
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
            A
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
            W
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
            O
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
            R
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
            D
        </text>
    </svg>;

}