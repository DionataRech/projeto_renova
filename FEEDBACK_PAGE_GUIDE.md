# Página de Depoimentos e Feedbacks - Guia de Customização

## 📋 Visão Geral

A página de depoimentos (`/app/feedback/page.tsx`) é uma landing page elegante e responsiva para exibir feedbacks e testimoniais de clientes. Ela foi projetada para ser acessada a partir do link bio do Instagram com foco em conversão e experiência visual.

## 🎨 Estrutura da Página

A página está organizada em 6 seções principais:

### 1. **Header Sticky**

- Logo da clínica no lado esquerdo
- Botão "Agendar" fixo no topo
- Backdrop blur elegante
- Sempre visível durante a navegação

### 2. **Hero Section**

- Titulo impactante
- Subtítulo guiando o visitante
- Botão CTA primário
- Fundo com gradiente e elementos decorativos

### 3. **Depoimentos em Vídeo**

- Grid 2x2 no desktop, 1 coluna no mobile
- Cada vídeo com thumbnail, título e nome do cliente
- Modal ao clicar para reprodução
- Animações de fade-in em cascata

### 4. **Posts do Instagram via iframe**

- Grid de 3 posts no desktop
- Integração direta com Instagram (embed)
- Carregamento automático dos posts

### 5. **Depoimentos Textuais**

- Grid 3 colunas no desktop
- Cartões com estrelas, texto, autor e tratamento
- Efeito hover com elevação
- Animações suaves

### 6. **Call-to-Action Final + Footer**

- Seção com fundo gradiente e decorações
- Dois botões: "Agendar Avaliação" e "Localização"
- Footer com links e informações da clínica

## 🔧 Como Customizar

### Alterando Depoimentos em Vídeo

Edite o array `videoTestimonials` na linha ~16:

```tsx
const videoTestimonials = [
  {
    id: 1,
    thumbnail: "/images/testmonials/1.webp", // Caminho da imagem
    title: "Seu Título",
    name: "Nome do Cliente",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // URL do vídeo
  },
  // ... adicione mais vídeos
];
```

**Formatos suportados:**

- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
- Video hospedado: Substitua pelo `<video>` tag se necessário

### Alterando Posts do Instagram

Edite o array `instagramPosts` (linha ~32):

```tsx
const instagramPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/p/CODIGO_DO_POST/",
  },
  // ... adicione mais posts
];
```

Para obter o código de um post:

1. Abra o post no Instagram
2. Copie a URL: `instagram.com/p/XYZ123/`
3. Cole em `url`

**Nota:** O Instagram precisa que o embed esteja habilitado na conta

### Alterando Depoimentos Textuais

Edite o array `textTestimonials` (linha ~43):

```tsx
const textTestimonials = [
  {
    id: 1,
    text: '"Seu depoimento aqui"',
    author: "Nome do Cliente",
    treatment: "Tipo de Tratamento", // Ex: "Criolipólise - Abdômen"
  },
  // ... adicione mais depoimentos
];
```

### Links e URLs Importantes

Procure e atualize:

```tsx
// WhatsApp
const whatsappLink =
  "https://api.whatsapp.com/send/?phone=+555196490632&text=...";

// Links de redirecionamento
href = "https://renovaclinicb.com.br"; // Site principal
href = "https://instagram.com/renova.clinicb"; // Instagram
href = "https://maps.app.goo.gl/..."; // Google Maps
```

## 📱 Responsividade

A página é 100% responsiva:

- **Mobile**: 1 coluna, stack vertical
- **Tablet**: 2 colunas
- **Desktop**: Layout completo com 2-3 colunas

## ✨ Animações

Todas as seções usam animações CSS suaves:

- `animate-fade-in`: Fade in com movimento de 10px para baixo
- Delays em cascata para efeito escalonado
- `hover:scale-105`: Efeito de escala em cards e botões

Para adicionar delays customizados:

```tsx
style={{ animationDelay: `${index * 100}ms` }}
```

## 🎯 Componentes Reutilizáveis

A página utiliza 3 componentes customizados:

### `TestimonialCard` (`components/ui/testimonial-card.tsx`)

```tsx
<TestimonialCard
  text={testimonial.text}
  author={testimonial.author}
  treatment={testimonial.treatment}
  rating={5}
/>
```

### `VideoThumbnail` (`components/ui/video-thumbnail.tsx`)

```tsx
<VideoThumbnail
  thumbnail={video.thumbnail}
  title={video.title}
  name={video.name}
  onClick={() => setSelectedVideo(video.id)}
/>
```

### `SectionHeader` (`components/ui/section-header.tsx`)

```tsx
<SectionHeader
  tag="🎥 Assista"
  title="Depoimentos em vídeo"
  subtitle="Histórias reais de clientes que confiaram em nós"
/>
```

## 🎨 Personalizando Cores e Estilos

As cores são controladas pelo `tailwind.config.ts`:

- `primary`: Cor principal da marca
- `secondary`: Cor secundária
- `muted-foreground`: Texto cinza
- `background`: Fundo

Para mudar rapidamente, edite os valores CSS no Tailwind config.

## 🚀 Otimizações de Performance

- Imagens em `.webp` (já otimizadas)
- Iframes lazy-loaded
- Sem autoplay de vídeo
- CSS otimizado com Tailwind

## 📊 SEO e Metadados

Para adicionar metadados customizados, crie um `layout.tsx` ou atualize em `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Depoimentos - Renova Clinic",
  description:
    "Veja depoimentos reais de clientes satisfeitos com nossos tratamentos estéticos.",
  openGraph: {
    title: "Depoimentos - Renova Clinic",
    description: "Histórias de transformação de clientes reais",
    images: ["/images/og-image.webp"],
  },
};
```

## 🐛 Troubleshooting

### Vídeos não carregam

- Verifique se a URL é um embed (não a URL do watch)
- YouTube: `youtube.com/embed/ID` ✅
- YouTube: `youtube.com/watch?v=ID` ❌

### Posts do Instagram não aparecem

- Conta precisa ter embed habilitado
- Perfil não pode ser privado
- Tente recarregar a página

### Animações não funcionam

- Verifique se `tailwind.config.ts` foi atualizado com as keyframes
- Limpe cache do navegador (Ctrl+Shift+R)

## 📞 Suporte

Para customizações mais avançadas, consulte:

- Documentação do Tailwind CSS
- Next.js App Router docs
- shadcn/ui components

## 🔗 Arquivos Relacionados

- `app/feedback/page.tsx` - Página principal
- `components/ui/testimonial-card.tsx` - Componente de card
- `components/ui/video-thumbnail.tsx` - Componente de thumbnail
- `components/ui/section-header.tsx` - Componente de header de seção
- `tailwind.config.ts` - Configurações de estilo

---

**Última atualização:** 4 de março de 2026
