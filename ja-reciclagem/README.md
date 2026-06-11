# J.A Reciclagem — Landing Page

Landing page profissional para a **J.A Comércio de Metais e Sucata**, construída com React + TypeScript + Vite.

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Pré-visualizar o build
npm run preview
```

---

## ⚙️ Configuração

Todas as informações editáveis estão em **`src/constants.ts`**:

| Variável              | O que é                              |
|-----------------------|--------------------------------------|
| `WHATSAPP_RAW`        | Número WhatsApp (só dígitos, com DDI) |
| `WHATSAPP_NUMBER`     | Número formatado para exibição       |
| `GOOGLE_REVIEW_URL`   | Link de avaliação no Google          |
| `GOOGLE_MAPS_URL`     | Link do Google Maps                  |

**Exemplo de número:**
```ts
export const WHATSAPP_RAW    = '5521987654321'
export const WHATSAPP_NUMBER = '(21) 98765-4321'
```

---

## 📁 Estrutura

```
src/
├── assets/
│   └── logo.jpeg            ← Logo da J.A
├── components/
│   ├── Navbar.tsx / .css    ← Barra de navegação fixa
│   ├── Hero.tsx / .css      ← Seção principal (full-height)
│   ├── About.tsx / .css     ← Sobre Nós + Timeline
│   ├── Services.tsx / .css  ← Materiais + Como Funciona
│   ├── Machinery.tsx / .css ← Destaque Maquinário
│   ├── Location.tsx / .css  ← Localização + Google Maps
│   ├── Contact.tsx / .css   ← CTA + Contato
│   ├── Footer.tsx / .css    ← Rodapé
│   └── WhatsAppButton.tsx   ← Botão flutuante WhatsApp
├── constants.ts             ← ⚠️ Configurações principais
├── App.tsx
├── App.css
├── index.css                ← Design tokens + utilitários
└── main.tsx
```

---

## 🎨 Paleta 60/30/10

| % | Cor       | Uso                                      |
|---|-----------|------------------------------------------|
| 60% | Verde escuro (`#14532d` → `#16a34a`) | Hero, Maquinário, Contato, Nav |
| 30% | Cinza (`#f3f4f6`, `#6b7280`, `#374151`) | Seções alternas, textos, cards |
| 10% | Branco (`#ffffff`) | Backgrounds de cards, texto em fundos escuros |

---

## 📌 Funcionalidades

- ✅ Botão flutuante WhatsApp com animação pulse
- ✅ Link para avaliação no Google
- ✅ Google Maps embed
- ✅ Navegação fixa com scroll suave
- ✅ Menu mobile responsivo
- ✅ Animações de entrada (fade-up)
- ✅ Totalmente responsivo (mobile-first)
- ✅ Meta tags SEO básicas
- ✅ Fontes: Oswald (display) + Inter (corpo)
