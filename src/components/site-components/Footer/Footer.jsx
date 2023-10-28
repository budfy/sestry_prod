import './Footer.scss';

import Container from '../../base-components/Container';
import {ReactComponent as FooterLogo} from '../../../assets/images/logo/logo_v.svg'

export default function Footer (props){
  return(
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__logo">
            <FooterLogo className="footer__logo-img" />
          </div>

          <ul className="footer__menu">

          </ul>
          <ul className="footer__social">
            
          </ul>

          <p className="footer__copy">Sestry accessories © 2023</p>
      </div>
      </Container> 
    </footer>
  );
}