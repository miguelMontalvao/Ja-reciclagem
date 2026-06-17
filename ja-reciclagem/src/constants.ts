// =============================================
// J.A Reciclagem — Configurações do Site
// Atualize os valores abaixo conforme necessário
// =============================================

/** Número de WhatsApp (apenas dígitos, com DDD e código do país) */
export const WHATSAPP_RAW = '5521970480520' // ← SUBSTITUIR pelo número real

/** Número formatado para exibição */
export const WHATSAPP_NUMBER = '(21) 97048-0520' // ← SUBSTITUIR pelo número real

/** Mensagem pré-preenchida no WhatsApp */
const WA_MESSAGE = encodeURIComponent(
  'Olá, J.A Reciclagem! Gostaria de vender sucata. Pode me passar mais informações sobre coleta?'
)

/** URL completa do WhatsApp */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_RAW}?text=${WA_MESSAGE}`

/** Link para avaliação no Google (substitua pelo link real da sua ficha) */
export const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJu2wsL1vZvgkQsJDoFeMYiVQ'

/** Link para visualizar no Google Maps */
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps?ftid=0x9be9d57b2f2cbb:0x549885e315e890b0'

/** Créditos de desenvolvimento (rodapé) */
export const DEVELOPER_NAME = 'Atylus Soluções Digitais'
export const DEVELOPER_URL = 'https://atylus.com.br/'
