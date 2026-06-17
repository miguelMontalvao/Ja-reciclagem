import { MessageCircle, Phone } from 'lucide-react'
import { WHATSAPP_URL, WHATSAPP_NUMBER } from '../constants'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contato" className="contact">
      {/* Diagonal accent */}
      <div className="contact__accent" aria-hidden="true" />

      <div className="container contact__inner">
        <div className="contact__text">
          <p className="section-eyebrow" style={{ color: 'var(--green-400)' }}>
            Fale Conosco
          </p>
          <h2 className="section-title section-title--light">
            Pronto para vender<br /> sua sucata?
          </h2>
          <div className="divider divider--light" />
          <p className="section-lead section-lead--light">
            Entre em contato agora pelo WhatsApp. Informe o tipo e o volume
            aproximado de material — nossa equipe retorna rapidamente com
            uma proposta e agenda a coleta.
          </p>

          <div className="contact__actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp contact__btn-main"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </div>

          <p className="contact__number">
            <Phone size={14} />
            {WHATSAPP_NUMBER}
          </p>
        </div>

        <div className="contact__card">
          <h3 className="contact__card-title">Por que escolher a J.A?</h3>
          <ul className="contact__reasons">
            {[            
              'Pagamento imediato na hora da pesagem',
              'Maquinário próprio e moderno',
              'Mais de 10 anos de confiança no RJ',              
              'Equipe profissional e comprometida',
            ].map(r => (
              <li key={r} className="contact__reason">
                <span className="contact__reason-dot" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
