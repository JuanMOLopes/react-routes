import "./Footer.css";

function Footer(props) {
  return (
    <>
      <footer>
        <div className="redes">
          <div className="insta">
            <img src={props.insta} className="footer-img" />
            <p>{props.texto1} </p>
          </div>
          <div className="gmail">
            <img src={props.gmail} className="footer-img" />
            <p>{props.texto2} </p>
          </div>
        </div>

        <p>{props.texto3} </p>
      </footer>
    </>
  );
}

export default Footer;
