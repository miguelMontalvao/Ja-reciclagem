import { MapPin, Clock, Phone, Star } from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_URL, GOOGLE_REVIEW_URL, GOOGLE_MAPS_URL } from '../constants'
import './Location.css'

const horarios = [
  { dia: 'Segunda-feira',  hora: '08:00 – 18:00' },
  { dia: 'Terça-feira',    hora: '08:00 – 18:00' },
  { dia: 'Quarta-feira',   hora: '08:00 – 18:00' },
  { dia: 'Quinta-feira',   hora: '08:00 – 18:00' },
  { dia: 'Sexta-feira',    hora: '08:00 – 18:00' },
  { dia: 'Sábado',         hora: 'Fechado' },
  { dia: 'Domingo',        hora: 'Fechado' },
]

export default function Location() {
  return (
    <section id="localizacao" className="location">
      <div className="container location__inner">
        <div className="location__info">
          <p className="section-eyebrow">Onde Estamos</p>
          <h2 className="section-title">Localização & Horários</h2>
          <div className="divider" />

          <div className="location__detail">
            <MapPin size={18} className="location__detail-icon" />
            <div>
              <p className="location__detail-label">Endereço</p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="location__detail-value location__address-link"
              >
                Rio de Janeiro – RJ<br />
                <span>Ver no Google Maps →</span>
              </a>
            </div>
          </div>

          <div className="location__detail">
            <Phone size={18} className="location__detail-icon" />
            <div>
              <p className="location__detail-label">WhatsApp / Telefone</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="location__detail-value"
              >
                {WHATSAPP_NUMBER}
              </a>
            </div>
          </div>

          <div className="location__hours">
            <div className="location__hours-header">
              <Clock size={18} className="location__detail-icon" />
              <p className="location__detail-label">Horário de Funcionamento</p>
            </div>
            <ul className="location__hours-list">
              {horarios.map(h => (
                <li key={h.dia} className={`location__hour-row ${h.hora === 'Fechado' ? 'location__hour-row--closed' : ''}`}>
                  <span className="location__hour-day">{h.dia}</span>
                  <span className="location__hour-time">{h.hora}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="location__review-btn"
          >
            <Star size={16} fill="currentColor" />
            Avalie nossa empresa no Google
          </a>
        </div>

        {/* Map embed */}
        <div className="location__map-wrap">
          <iframe
            title="J.A Reciclagem no Google Maps"
            src="https://maps.google.com/maps?q=JA+Reciclagem+Comercio+de+Metais+e+Sucata+Rio+de+Janeiro&output=embed&z=15"
            className="location__map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
