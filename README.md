
# Projeto StudioZoom - Portfólio de Fotografia

Bem-vindo ao repositório do StudioZoom, um site de portfólio completo e dinâmico para um estúdio de fotografia e vídeo. Este projeto foi desenvolvido como um showcase de design web moderno, focado em interatividade, animações fluidas e uma experiência de usuário (UX) totalmente responsiva.




##  Funcionalidades Principais

-  **Design Sofisticado:** Paleta de cores elegante (preto, branco e dourado) e tipografia premium para uma estética de alta qualidade.
-  **Totalmente Responsivo:** A interface se adapta perfeitamente a qualquer dispositivo, de desktops a celulares, com um menu hamburger funcional para navegação mobile.
-  **Hero com Vídeo de Fundo:** Causa um impacto imediato com um vídeo em autoplay que preenche toda a primeira tela.
-  **Galeria Horizontal Imersiva:** Uma galeria de imagens em formato de "filmstrip" com rolagem horizontal intuitiva, otimizada para mouse e trackpad.
-  **Cards com Efeito 3D Flip:** A seção de serviços ("Ensaios") apresenta cards interativos que giram ao passar o mouse ou focar (acessível via teclado), revelando mais informações.
-  **Player de Vídeo Customizado:** Um player de vídeo minimalista com um botão de "play" centralizado para uma apresentação cinematográfica do portfólio em vídeo.
-  **Formulário Inteligente:** Formulário de orçamento com "floating labels" (rótulos flutuantes) que melhoram a UX e pacotes de serviço que são carregados dinamicamente.
-  **Animações de Scroll:** Elementos surgem na tela de forma suave e coreografada conforme o usuário rola a página, utilizando a `IntersectionObserver` API para melhor performance.

##  Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e moderna.
- **CSS3:** Estilização avançada, incluindo:
  - Flexbox e Grid Layout
  - Variáveis CSS (Custom Properties) para fácil manutenção do tema.
  - Animações e Transições (`@keyframes`, `transition`)
  - Transformações 3D (para o efeito flip)
  - Media Queries para o design responsivo
- **JavaScript (ES6+):**
  - Manipulação do DOM para todas as funcionalidades interativas.
  - Event Listeners (scroll, click, wheel, etc.)
  - Lógica para o menu hamburger, modal da galeria, player de vídeo e formulário dinâmico.
  - `IntersectionObserver` API para animações eficientes.
- **Google Fonts:** Para a tipografia (`Playfair Display` e `Inter`)

## 📂 Estrutura de Arquivos

```
/studiozoom-project
├── 📁 img/
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── ...
│   └── Vídeo_Pronto_StudioZoom_Apresenta.mp4
├── index.html
├── style.css
├── script.js
└── README.md
```

##  Como Executar Localmente

Para rodar este projeto na sua máquina local, siga estes passos simples:

1. **Clone ou Baixe o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
   Ou simplesmente baixe e extraia o arquivo ZIP.

2. **Organize os Arquivos de Mídia:**
   - Certifique-se de que todas as suas imagens e vídeos estão dentro da pasta `img/`. O código está configurado para buscar os arquivos a partir deste diretório.

3. **Abra o Projeto:**
   - Abra o arquivo `index.html` em qualquer navegador web moderno (Chrome, Firefox, Edge, etc.)

   - **Dica de Profissional:** Para a melhor experiência de desenvolvimento, use a extensão **"Live Server"** no Visual Studio Code. Ela cria um servidor local e recarrega a página automaticamente sempre que você salva uma alteração.

##  Possíveis Melhorias Futuras

- **Backend para Formulário:** Integrar o formulário de orçamento com um serviço como Netlify Forms, Formspree ou um backend próprio para receber as solicitações por email.
- **Otimização de Mídia:** Implementar "lazy loading" para as imagens da galeria e usar formatos de imagem mais modernos (como `.webp`) para melhorar a velocidade de carregamento.
- **CMS (Sistema de Gerenciamento de Conteúdo):** Integrar com um CMS Headless (como Strapi ou Sanity) para que o conteúdo da galeria e dos ensaios possa ser atualizado sem mexer no código.

---


