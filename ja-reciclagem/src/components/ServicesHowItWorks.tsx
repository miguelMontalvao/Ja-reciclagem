import { MessageCircle, Truck, BadgeDollarSign } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'
import './Services.css'

const steps = [
  {
    number: '01',
    icon: <MessageCircle size={22} />,
    title: 'Entre em Contato',
    desc: 'Nos chame pelo WhatsApp com a estimativa do volume disponível. Respondemos rápido.',
  },
  {
    number: '02',
    icon: <Truck size={22} />,
    title: 'Agendamos a Coleta',
    desc: 'Deslocamos nossa equipe e maquinário até o seu pátio no dia e horário combinados.',
  },
  {
    number: '03',
    icon: <BadgeDollarSign size={22} />,
    title: 'Pesagem & Pagamento',
    desc: 'Pesamos o material in loco com equipamento aferido e fazemos o pagamento imediatamente.',
  },
]

export default function ServicesHowItWorks() {
  return (
    <section className="services__how">
      <div className="container">
        <div className="services__header services__header--center">
          <p className="section-eyebrow" style={{ color: 'var(--green-400)' }}>
            Como Funciona
          </p>
          <h2 className="section-title section-title--light">
            Do contato ao pagamento: simples assim
          </h2>
          <div className="divider divider--light" style={{ margin: '1.25rem auto' }} />
        </div>

        <div className="services__steps">
          {steps.map(s => (
            <div key={s.number} className="services__step">
              <div className="services__step-num">{s.number}</div>
              <div className="services__step-icon">{s.icon}</div>
              <h3 className="services__step-title">{s.title}</h3>
              <p className="services__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="services__how-cta">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            Falar com a Equipe
          </a>
        </div>
      </div>
    </section>
  )
}
