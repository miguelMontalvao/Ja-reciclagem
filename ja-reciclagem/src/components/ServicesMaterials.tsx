import { Package2, Wrench, FileText } from 'lucide-react'
import './Services.css'

const materiais = [
  {
    icon: <Wrench size={28} />,
    title: 'Sucata de Ferro',
    desc: 'Compramos sucata de ferro, estruturas metálicas, chaparias, ferragens, e outros materiais ferrosos em grandes volumes.',
  },
  {
    icon: <Package2 size={28} />,
    title: 'Ferro Misto',
    desc: 'Compramos ferro misto com avaliação justa e pesagem transparente, garantindo segurança em toda negociação',
  },
  {
    icon: <FileText size={28} />,
    title: 'Papelão',
    desc: 'Compramos papelão em fardos ou solto. A coleta é feita de forma independente, facilitando a logística e a organização operacional',
  },
]

export default function ServicesMaterials() {
  return (
    <section id="servicos" className="services">
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
    </section>
  )
}
