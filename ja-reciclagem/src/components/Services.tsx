import { MessageCircle, Truck, BadgeDollarSign, Package2, Wrench, FileText } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'
import './Services.css'

const materiais = [
  {
    icon: <Wrench size={28} />,
    title: 'Sucata de Ferro',
    desc: 'Compramos sucata de ferro em grandes quantidades: estruturas metálicas, chaparias, ferragens, peças diversas e todo tipo de material ferroso.',
  },
  {
    icon: <Package2 size={28} />,
    title: 'Ferro Misto',
    desc: 'Adquirimos ferro misto — mistura de metais ferrosos com outros materiais — com preço justo e avaliação transparente no ato da coleta.',
  },
  {
    icon: <FileText size={28} />,
    title: 'Papelão',
    desc: 'Compramos papelão em fardos ou solto, de ferro-velhos que acumulam embalagens e caixas. Coletamos junto com o ferro sem custo adicional.',
  },
]

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

export default function Services() {
  return (
    <section id="servicos" className="services">
      {/* Materiais */}
      <div className="container services__materiais-wrap">
        <div className="services__header">
          <p className="section-eyebrow">O Que Compramos</p>
          <h2 className="section-title">Materiais aceitos</h2>
          <div className="divider" />
          <p className="section-lead">
            Trabalhamos com os principais materiais que circulam nos ferro-velhos
            do Rio de Janeiro. Volume mínimo negociável.
          </p>
        </div>

        <div className="services__cards">
          {materiais.map(m => (
            <div key={m.title} className="services__card">
              <div className="services__card-icon">{m.icon}</div>
              <h3 className="services__card-title">{m.title}</h3>
              <p className="services__card-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Como Funciona */}
      <div className="services__how">
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
              Solicitar Coleta Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
