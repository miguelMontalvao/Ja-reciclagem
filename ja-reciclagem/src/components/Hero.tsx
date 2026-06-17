import { ArrowDown, MessageCircle, Star } from 'lucide-react'
import { WHATSAPP_URL, GOOGLE_REVIEW_URL } from '../constants'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Decorative recycling watermark */}
      <div className="hero__watermark" aria-hidden="true">
        <RecycleWatermark />
      </div>

      {/* Dark overlay gradient */}
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="hero__eyebrow animate-fade-up">
          Rio de Janeiro · Mais de 10 anos de experiência
        </p>

        <h1 className="hero__title animate-fade-up delay-100">
          Transformamos <br />
          <span className="hero__title--accent">Sucata em Oportunidade</span>
          <br /> há mais de 10 anos
        </h1>

        <p className="hero__lead animate-fade-up delay-200">
          Especialistas na compra de ferro, sucata ferrosa e papelão.
          Atendemos ferro-velhos e empresas com pesagem transparente,
          pagamento imediato e maquinário próprio.
        </p>

        <div className="hero__actions animate-fade-up delay-300">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp hero__btn-wa"
          >
            <MessageCircle size={18} />
            Solicitar Avaliação
          </a>
          <a href="#sobre" className="btn btn-outline">
            Conheça Nossa História
          </a>
        </div>

        <div className="hero__badges animate-fade-up delay-400">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__badge"
          >
            <Star size={14} fill="currentColor" />
            Avalie no Google
          </a>
          <span className="hero__badge hero__badge--stat">
            +10 Anos de Mercado
          </span>
          <span className="hero__badge hero__badge--stat">
            Coleta Ágil e Segura
          </span>
        </div>
      </div>

      <a href="#sobre" className="hero__scroll-hint" aria-label="Rolar para baixo">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}

function RecycleWatermark() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="hero__recycle-svg"
      aria-hidden="true"
    >
      {/* Arrow 1 - top */}
      <path
        d="M100 15 L125 55 L112 55 L112 85 L88 85 L88 55 L75 55 Z"
        fill="currentColor"
      />
      {/* Arrow 2 - bottom right */}
      <path
        d="M160 115 L120 115 L120 102 L90 127 L120 152 L120 139 L160 139 Z"
        fill="currentColor"
        transform="rotate(120, 100, 100)"
      />
      {/* Arrow 3 - bottom left */}
      <path
        d="M160 115 L120 115 L120 102 L90 127 L120 152 L120 139 L160 139 Z"
        fill="currentColor"
        transform="rotate(240, 100, 100)"
      />
    </svg>
  )
}
