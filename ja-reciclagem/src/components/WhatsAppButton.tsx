import { WHATSAPP_URL } from '../constants'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Chamar no WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <WhatsAppSVG />
      <span className="wa-fab__tooltip">Fale Conosco</span>
    </a>
  )
}

function WhatsAppSVG() {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="wa-fab__icon"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.023 7.769L0 32l8.418-2.002A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.268 13.268 0 01-6.762-1.847l-.484-.288-5.002 1.189 1.23-4.859-.318-.5A13.274 13.274 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
      <path d="M23.328 19.547c-.36-.18-2.132-1.05-2.463-1.169-.33-.12-.57-.18-.81.18-.24.36-.93 1.169-1.14 1.409-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.895-1.786-1.07-.954-1.792-2.132-2.002-2.492-.21-.36-.022-.554.158-.733.162-.162.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.292-.7-.588-.605-.81-.616-.21-.01-.45-.013-.69-.013-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.54 3.88 6.158 5.443 3.618 1.563 3.618 1.042 4.27.977.65-.065 2.132-.87 2.434-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z"/>
    </svg>
  )
}
