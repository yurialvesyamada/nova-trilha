import { Link } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";


export default function Cookies1() {

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="ACEITAR"
        cookieName="myAwesomeCookieName2"
        style={{ background: "white" }}
        buttonStyle={{ background: "#6BA4B8", color: "white", fontSize: "13px" }}
        expires={150}
      >
        <div className="text-center text-dark">Clique para ACEITAR as políticas de Cookies e Privacidade.</div>
        <div className="text-center text-dark">
          <Link to="/Politica_de_privacidade">Política de Privacidade</Link> |
          <Link to="/Termos_de_uso">Termos de Uso</Link>
        </div>
        <span style={{ fontSize: "10px" }}></span>
      </CookieConsent>

    </>
  );
}
