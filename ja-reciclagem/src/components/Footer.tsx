import { MapPin, Phone, Clock } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import { WHATSAPP_NUMBER, WHATSAPP_URL, GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL, DEVELOPER_NAME, DEVELOPER_URL } from '../constants'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__brand-row">
            <img src={logo} alt="J.A Reciclagem" className="footer__logo" />
            <div>
              <p className="footer__name">J.A Reciclagem</p>
              <p className="footer__slogan">Comércio de Metais e Sucata</p>
            </div>
          </div>
          <p className="footer__about">
            Há mais de 10 anos sendo o parceiro confiável dos ferro-velhos cariocas.
            Compramos sucata de ferro, ferro misto e papelão, coletamos no seu pátio
            e pagamos na hora.
          </p>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Navegação</h4>
          <ul className="footer__links">
            {['#hero', '#sobre', '#servicos', '#localizacao', '#contato'].map((href, i) => {
              const labels = ['Início','Sobre Nós','Serviços','Localização','Contato']
              return (
                <li key={href}>
                  <a href={href} className="footer__link">{labels[i]}</a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contato</h4>
          <ul className="footer__contact-list">
            <li>
              <Phone size={14} />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <MapPin size={14} />
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                Rio de Janeiro – RJ
              </a>
            </li>
            <li>
              <Clock size={14} />
              <span>Seg–Sex: 08h–17h</span>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__review-link"
              title="Avalie no Google"
            >
              ★ Avalie no Google
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} J.A Comércio de Metais e Sucata. Todos os direitos reservados.</p>
          <p className="footer__dev-credit">
            Desenvolvido por{' '}
            <a
              href={DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__dev-link"
            >
              {DEVELOPER_NAME}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
