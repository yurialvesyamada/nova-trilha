import {CookiePopup} from "@larsroettig/react-cookie-popup";
import { Link, withRouter } from 'react-router-dom';


export default function Cookies1() {

    return (
<>
<CookiePopup /*PopupProps={{"classAcceptButton": "text-dark"}}*/>
    <section>
        <h4 className="py-5 text-xl">
               Clique para aceitar as políticas de Cookies e Privacidade
               <br/><br/><a href="/Politica_de_privacidade">Política de Privacidade</a>
               <br/><br/><a href="/Termos_de_uso">Termos de Uso</a>
        </h4>
    </section>
</CookiePopup>
</>
    );
}
