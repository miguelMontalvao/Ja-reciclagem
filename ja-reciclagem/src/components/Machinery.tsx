import { ShieldCheck, Zap, RotateCcw, Clock } from 'lucide-react'
import './Machinery.css'

const specs = [
  { label: 'Tipo',       value: 'Escavadeira hidráulica sobre esteiras' },
  { label: 'Acessório',  value: 'Garra sucateira industrial' },
  { label: 'Aplicação',  value: 'Movimentação e carregamento de sucata' },
  { label: 'Condição',   value: 'Maquinário recente e revisado' },
]

const features = [
  {
    icon: <Zap size={22} />,
    title: 'Alta Performance',
    desc: 'A escavadeira com garra sucateira permite carregar grandes volumes de metal em menos tempo, reduzindo o tempo de coleta no seu pátio.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Segurança Total',
    desc: 'Maquinário revisado e operado por profissionais experientes. Atuamos com segurança para o seu espaço e para a nossa equipe.',
  },
  {
    icon: <RotateCcw size={22} />,
    title: 'Coleta Ágil',
    desc: 'Com a garra sucateira, mesmo pilhas irregulares de ferro são manuseadas rapidamente, tornando a coleta limpa e eficiente.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Pontualidade',
    desc: 'Equipamento confiável significa poucas paradas. Quando agendamos, chegamos no horário e concluímos no prazo combinado.',
  },
]

export default function Machinery() {
  return (
    <section id="maquinario" className="machinery">
      <div className="container machinery__inner">
        {/* Header */}
        <div className="machinery__header">
          <p className="section-eyebrow" style={{ color: 'var(--green-400)' }}>
            Nosso Maquinário
          </p>
          <h2 className="section-title section-title--light">
            Tecnologia pesada a serviço da sua coleta
          </h2>
          <div className="divider divider--light" />
          <p className="section-lead section-lead--light">
            Investimos em equipamentos modernos para entregar agilidade, segurança
            e confiabilidade em cada visita ao seu ferro-velho.
          </p>
        </div>

        {/* Featured machine */}
        <div className="machinery__featured">
          <div className="machinery__featured-badge">
            ★ Destaque do Parque
          </div>

          <div className="machinery__featured-content">
            <div className="machinery__icon-wrap" aria-hidden="true">
              <ExcavatorIcon />
            </div>

            <div className="machinery__featured-text">
              <h3 className="machinery__featured-title">
                Escavadeira Hidráulica<br />
                <span>sobre Esteiras</span>
                <span className="machinery__featured-sub"> com Garra Sucateira</span>
              </h3>
              <p className="machinery__featured-desc">
                Nossa escavadeira hidráulica sobre esteiras equipada com garra sucateira
                industrial é o coração da nossa operação de coleta. Desenvolvida para
                movimentar grandes massas de sucata com precisão, ela permite carregar
                caminhões em tempo recorde sem a necessidade de mão de obra manual
                extensiva. <strong>Maquinário recente, revisado e de alto desempenho.</strong>
              </p>

              <div className="machinery__specs">
                {specs.map(s => (
                  <div key={s.label} className="machinery__spec">
                    <span className="machinery__spec-label">{s.label}</span>
                    <span className="machinery__spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="machinery__features">
          {features.map(f => (
            <div key={f.title} className="machinery__feature">
              <div className="machinery__feature-icon">{f.icon}</div>
              <h4 className="machinery__feature-title">{f.title}</h4>
              <p className="machinery__feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* SVG illustration of excavator */
function ExcavatorIcon() {
  return (
    <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" className="machinery__excavator-svg">
      {/* Tracks */}
      <rect x="10" y="85" width="140" height="20" rx="10" fill="#15803d" />
      <rect x="18" y="88" width="124" height="14" rx="7" fill="#166534" />
      {/* Wheels */}
      {[22,50,80,110,138].map(cx => (
        <circle key={cx} cx={cx} cy="95" r="9" fill="#14532d" stroke="#4ade80" strokeWidth="1.5" />
      ))}
      {/* Body */}
      <rect x="20" y="55" width="90" height="34" rx="5" fill="#16a34a" />
      {/* Cabin */}
      <rect x="22" y="35" width="55" height="25" rx="4" fill="#15803d" />
      {/* Window */}
      <rect x="27" y="39" width="22" height="16" rx="3" fill="#052e16" opacity="0.8" />
      {/* Arm joint */}
      <circle cx="108" cy="65" r="7" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
      {/* Main arm */}
      <rect x="108" y="25" width="10" height="42" rx="4" fill="#15803d" transform="rotate(-15, 108, 65)" />
      {/* Forearm */}
      <rect x="118" y="10" width="8" height="38" rx="3" fill="#16a34a" transform="rotate(10, 118, 40)" />
      {/* Garra sucateira */}
      <g transform="translate(130, 5) rotate(20, 15, 20)">
        <circle cx="15" cy="15" r="10" fill="none" stroke="#4ade80" strokeWidth="2" />
        <line x1="15" y1="5" x2="8"  y2="25" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="5" x2="22" y2="25" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="5" x2="15" y2="28" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* Scrap pieces on ground */}
      <rect x="30" y="78" width="14" height="7" rx="2" fill="#14532d" transform="rotate(-8,37,81)" />
      <rect x="55" y="76" width="10" height="6" rx="2" fill="#14532d" transform="rotate(5,60,79)" />
    </svg>
  )
}
