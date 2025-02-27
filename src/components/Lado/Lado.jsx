import "./Lado.css";

function Lado(props) {
    return (
        <div className="lado">
            <p className="valor">{props.txt1}</p>
            <p className="valor">{props.txt2}</p>
            <p className="valor">{props.txt3}</p>
        </div>
    );
}

export default Lado;