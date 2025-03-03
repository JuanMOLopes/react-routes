import "./Header.css";

function Titulo(props) {
  return (
    <>
      <header>
        <img src={props.logo} className="header-img" />
        <h1>{props.titulo}</h1>
      </header>
    </>
  );
}

export default Titulo;