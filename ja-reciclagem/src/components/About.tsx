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
  'Pesagem transparente e confiável',
  'Pagamento imediato após a conferência',
  'Maquinário próprio para movimentação de sucata',
  'Equipe experiente e comprometida',
  'Atendimento a ferro-velhos de todos os portes',
  'Mais de 10 anos de atuação no mercado',
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
            Mais de 10 anos impulsionando a reciclagem no Rio de Janeiro
          </h2>
          <div className="divider" />

          <p className="section-lead">
            A J.A Comércio de Metais e Sucata atua há mais de 10 anos
            na compra de ferro, sucata ferrosa e papelão. Ao longo
            desse período construímos uma reputação baseada em
            transparência, agilidade e compromisso com nossos parceiros.
          </p>

          <p className="about__p">
            Trabalhamos exclusivamente com ferro-velhos, comprando sucata de ferro,
            ferro misto e papelão em grandes volumes. Nossa operação conta com maquinário próprio para
            movimentação e carregamento de grandes volumes,
            <strong> garantindo eficiência, segurança e rapidez em cada coleta</strong>: nossa equipe desloca o maquinário
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
