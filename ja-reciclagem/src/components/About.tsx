import { CheckCircle2 } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import './About.css'

const milestones = [
  { year: '1994', text: 'Fundação da J.A no Rio de Janeiro' },
  { year: '2000', text: 'Expansão da frota de coleta' },
  { year: '2010', text: 'Investimento em maquinário pesado moderno' },
  { year: 'Hoje', text: 'Referência em compra de sucata no RJ' },
]

const diferenciais = [
  'Coleta realizada diretamente no seu ferro-velho',
  'Pagamento imediato no ato da pesagem',
  'Maquinário moderno para agilidade na carga',
  'Equipe experiente e comprometida',
  'Atendimento a ferro-velhos de todos os portes',
  'Mais de 30 anos de reputação no mercado carioca',
]

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container about__grid">
        {/* Visual column */}
        <div className="about__visual">
          <div className="about__logo-wrap">
            <img src={logo} alt="J.A Reciclagem" className="about__logo" />
            <div className="about__logo-ring" />
          </div>

          <div className="about__timeline">
            {milestones.map(m => (
              <div key={m.year} className="about__milestone">
                <span className="about__milestone-year">{m.year}</span>
                <span className="about__milestone-dot" />
                <span className="about__milestone-text">{m.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text column */}
        <div className="about__text">
          <p className="section-eyebrow">Nossa História</p>
          <h2 className="section-title">
            Mais de 30 anos movendo o ciclo da reciclagem no Rio
          </h2>
          <div className="divider" />

          <p className="section-lead">
            Fundada no Rio de Janeiro nos anos 90, a J.A Comércio de Metais e Sucata
            nasceu com uma missão clara: ser o elo confiável entre o ferro-velho e
            o ciclo produtivo da reciclagem. Ao longo de três décadas, consolidamos
            nossa presença no estado com seriedade, pontualidade e respeito por cada parceiro.
          </p>

          <p className="about__p">
            Trabalhamos exclusivamente com ferro-velhos, comprando sucata de ferro,
            ferro misto e papelão em grandes volumes. Diferente de outros compradores,
            <strong> nós vamos até você</strong>: nossa equipe desloca o maquinário
            e a frota até o seu pátio, realiza a pesagem no local e efetua o pagamento
            de forma imediata e transparente.
          </p>

          <ul className="about__diferenciais">
            {diferenciais.map(d => (
              <li key={d} className="about__diferencial">
                <CheckCircle2 size={18} className="about__check" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
