# IEFP Rio Meão · proposta de redesign

## 1. Autor e turma

- **Aluno:** Gabriel Sousa
- **Turma:** UX/UI Design 2026, IEFP Rio Meão (ação 26.0043)
- **Módulo:** UFCD 0154, Estilos em CSS

## 2. O projeto

Proposta de um novo website para o Serviço de Formação Profissional de Rio Meão, do IEFP. É uma página única com navegação entre secções: apresentação, áreas de formação, sobre nós, cursos, feed, inscrição e contactos.

Os cartões dos cursos viram ao clicar na seta e mostram os detalhes no verso, sem JavaScript. No hero, no lugar de uma foto, há uma grelha «bento» com dados reais do centro. Nos contactos há o mapa real do Google Maps.

Todos os dados são reais e verificados: contactos do site oficial, cursos publicados no iefponline e notícias do Instagram do próprio centro. A lista completa está em [FONTES.md](FONTES.md).

Projeto académico, website não oficial.

## 3. Website publicado

https://spgabs.github.io/Gabriel_Sousa_IEFP_Rio_Meao/

Site de referência: [página do Rio Meão no iefp.pt](https://www.iefp.pt/detalheservico?id=323697)

## 4. Conceito visual

O ponto de partida foi a página inicial do [FAD do IEFP](https://fad.iefp.pt), a plataforma de formação a distância, que tem um estilo mais atual do que o iefp.pt. Do FAD aproveitei a estrutura: hero com etiqueta, título e botão, cartões com uma cor por tipo, secção com imagem e lista de vistos, chamada final antes dos contactos.

As cores e as fontes vêm do site oficial [iefp.pt](https://www.iefp.pt), e não do FAD, para o site ficar ligado à marca IEFP. O IEFP não publica um manual de marca, por isso li as cores diretamente do CSS do iefp.pt. Cada cartão de área usa uma das cores que o iefp.pt usa no menu.

O tom dos textos trata o visitante por «tu», como faz o Instagram do centro (#riomeaocontigo), e o título do hero vem dos cursos reais: do 6.º ano (Jardinagem) ao nível 5 (Automação).

### O que corrigi em relação ao FAD

Ao analisar o FAD em várias larguras de ecrã encontrei problemas que quis evitar:

| Problema no FAD | O que fiz |
|---|---|
| A barra lateral «Navegação» parte o layout: os cartões não alinham com o hero e o fundo das secções não chega à margem | Sem barra lateral. Todas as secções usam o mesmo `.container` e o fundo ocupa a largura toda |
| No tablet (995 px) cabem 3 cartões ao lado da barra lateral e o texto fica com 2 ou 3 palavras por linha | Os cartões só ficam em 3 colunas a partir de 992 px. Os cursos passam de 1 para 2 e depois para 4 colunas |
| No telemóvel a navegação desce para o fim da página | O menu fica no cabeçalho fixo e abre no botão |
| «Saber mais» verde-lima com pouco contraste | Testei o contraste de todas as cores nos dois modos (mínimo 4,5:1 para texto) |
| Títulos com quebras de linha escritas à mão | `max-width` em `ch` e `text-wrap: balance` |
| Hierarquia de títulos com saltos (h3 antes de h2) | h1 → h2 → h3 sem saltos |
| Botões e elementos flutuantes por cima do conteúdo | Só o cabeçalho é fixo |
| Nada indica quando uma ligação leva para outro site | Todas as ligações externas têm o ícone «caixa com seta», aplicado só com CSS (`a[target="_blank"]::after`), e avisam os leitores de ecrã que abrem num novo separador |

## 5. Tecnologias

- **HTML5 semântico:** `header`, `nav`, `main`, `section`, `article`, `figure`, `address`, `time`, `dl`, `footer`
- **CSS3** (ficheiro próprio `CSS/style.css`): variáveis, `:has()`, transformações 3D (`perspective`, `rotateY`, `backface-visibility`), Flexbox, CSS Grid, `grid-template-areas`, `@keyframes`, `clamp()`, `aspect-ratio`, `object-fit`, `text-wrap: balance`, `:focus-visible`, `:user-invalid`, media queries e `prefers-reduced-motion`
- **Bootstrap 5.3.3** (CDN jsDelivr), personalizado pelo CSS próprio:
  - Grelha: `container`, `row`, `col-*`, `row-cols-*`, `g-*`/`gx-*`/`gy-*`
  - Menu: `navbar`, `navbar-expand-lg`, `navbar-toggler` e `collapse`. O único JavaScript do site é o do Bootstrap, para o menu abrir no telemóvel
  - Formulário: `form-control` e `form-label`
  - Botões: a classe `btn`, com cores, formas e transições próprias (`btn-principal`, `btn-contorno`)
  - Utilitários: `d-flex`, `gap-*`, `h-100`, `visually-hidden`, `sticky-top`
- **Bootstrap Icons 1.11.3**
- **Google Fonts:** Roboto (títulos) e Open Sans (texto), as mesmas do iefp.pt
- **Git e GitHub Pages**

## 6. Modos diurno e noturno

O botão está no cabeçalho, sempre visível, também no telemóvel. É uma pílula com o texto «Modo escuro» dentro: escura quando está desligado, clara quando está ligado. A bola é uma pequena janela com uma paisagem feita só em CSS: de dia tem céu verde-lima, sol e colinas claras; de noite o céu escurece, aparecem estrelas e um círculo da cor do céu passa por cima do sol e deixa uma lua em quarto crescente. A ideia veio de uma [animação dia/noite no Pinterest](https://i.pinimg.com/originals/87/f9/ee/87f9eefefc480ce4416d353cd060dfc0.gif), refeita com código e cores próprias. No telemóvel pequeno fica só com a bola.

Funciona **sem JavaScript**: é uma checkbox escondida com um `<label>` por cima, e o CSS usa `:root:has(#modo-escuro:checked)` para trocar os valores das variáveis. O resto da folha de estilos não muda.

| | Diurno | Noturno |
|---|---|---|
| Fundo | Branco e verde muito claro | Verde quase preto |
| Texto | Cinzento escuro do iefp.pt (#383838) | Cinzento claro (#e3e9e5) |
| Destaque e botões | Verde IEFP (#00662B) com texto branco | Verde mais claro (#6cc58a) com texto escuro |
| Cartões das áreas | Azul e verdes do iefp.pt | Versões mais claras das mesmas cores |
| Rodapé | Verde escuro | Quase preto |

As cores escuras do IEFP ficam ilegíveis sobre fundo escuro (o verde #00662B tem só 2,58:1). Por isso no modo noturno usei versões mais claras do mesmo tom. Todas as combinações passam 4,5:1 nos dois modos.

## 7. Principais variáveis CSS

Definidas em `:root` e redefinidas no modo noturno:

| Variável | Para quê |
|---|---|
| `--cor-fundo`, `--cor-fundo-alt` | Fundo da página e das secções alternadas |
| `--cor-texto`, `--cor-texto-suave`, `--cor-titulo` | Texto principal, secundário e títulos |
| `--cor-destaque`, `--cor-link` | Cor de destaque e ligações |
| `--cor-cartao` | Fundo dos cartões e do formulário |
| `--cor-botao`, `--cor-botao-hover`, `--cor-botao-texto` | Botões |
| `--cor-borda` | Contornos e separadores |
| `--cor-jovens`, `--cor-adultos`, `--cor-qualifica` | Cor de cada cartão de área |
| `--cor-cta-fundo`, `--cor-rodape-fundo` | Chamada para inscrição e rodapé |
| `--raio`, `--sombra`, `--espaco-secao`, `--tempo-modo` | Arredondamentos, sombras, espaçamento e duração da mudança de modo |

O Bootstrap também passa a usar as nossas cores através de `--bs-body-bg` e `--bs-body-color`.

## 8. Transições

| | Onde | Propriedades | Duração | Temporização |
|---|---|---|---|---|
| 1 | Botões (`.btn`) | `background-color`, `color`, `border-color`, `transform` (sobe 2 px) | 0,2 s | `ease-in-out` e `ease-out` |
| 2 | Cartões (áreas, cursos, notícias) | `box-shadow`, `transform` (sobe 4 px) | 0,3 s | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| 3 | Mudança de modo (página, cabeçalho, cartões, formulário, rodapé) | `background-color`, `color`, `border-color` | 0,4 s | `ease` |
| 4 | Cartões dos cursos a virar | `transform` (`rotateY(180deg)`) e `visibility` com atraso de 0,3 s | 0,6 s | `cubic-bezier(0.4, 0.2, 0.2, 1)` |
| 5 | Botão do modo escuro | `background-color`, `color`, `padding` da pílula; `transform`, `background-color` e `box-shadow` da janela; `transform` do círculo que faz a lua (atraso de 0,15 s); `opacity` das estrelas (só acendem no fim, com atraso de 0,5 s) | 0,9 s (variável `--tema-tempo`) | `cubic-bezier(0.45, 0, 0.55, 1)`: começa e acaba devagar, sem ressalto |

### Como o cartão vira sem JavaScript

Cada cartão tem uma checkbox escondida. As setas → e ← são `<label>` dessa checkbox: ao clicar, a checkbox muda e o seletor `.virar-input:checked + .cartao-curso-interior` roda só esse cartão. A frente e o verso ficam na mesma célula de uma grelha (`grid-area: 1 / 1`), por isso o cartão fica com a altura do lado maior. O lado de trás fica com `visibility: hidden`, para o teclado e os leitores de ecrã não lerem o que não se vê.

Extra: as ligações do menu mudam de cor e fundo em 0,2 s (`linear`) e a seta dos cartões de áreas desliza 4 px (`ease-out`).

Todas usam a declaração abreviada `transition` com várias propriedades. Quem tem a opção «reduzir movimento» ligada no sistema não vê as animações (`prefers-reduced-motion`).

### Grelha «bento» no hero

Não consegui fotos com qualidade do centro, por isso o hero tem uma composição só com HTML e CSS: blocos de tamanhos diferentes desenhados com `grid-template-areas`. Cada bloco tem um dado real: os 4 cursos a começar, a idade dos cursos de aprendizagem, os cursos EFA e o RVCC, e as fotos do feed do Instagram em círculos sobrepostos. É uma lista (`<ul>`), por isso o leitor de ecrã lê o texto normalmente.

Os blocos entram com uma animação `@keyframes` (sobem 1rem e aparecem), um a seguir ao outro com `animation-delay`. Com «reduzir movimento» ligado, aparecem logo.

### Mapa nos contactos

O mapa é um `<iframe>` do Google Maps, com as coordenadas oficiais do centro. É HTML: o JavaScript do mapa corre dentro da página do Google, não no nosso site. Tem `title` para os leitores de ecrã e `loading="lazy"` para só carregar quando aparece no ecrã. No modo escuro o mapa continua claro, porque é conteúdo do Google e o nosso CSS não chega lá dentro.

### Teste de acessibilidade

Testei o site publicado no [AccessMonitor](https://accessmonitor.acessibilidade.gov.pt/), o validador oficial português das WCAG 2.1, o mesmo que o IEFP usa para avaliar o iefp.pt ([declaração de acessibilidade do IEFP](https://www.iefp.pt/acessibilidade)).

**Resultado a 24/11/2026: 10 em 10.** 36 práticas encontradas: 30 aceitáveis, 0 não aceitáveis e 6 para ver manualmente. A prática nova é a do mapa: o `<iframe>` não tem elementos interativos escondidos do teclado. Estas 6 foram verificadas à mão:

| Prática para ver manualmente | Verificação |
|---|---|
| O primeiro link salta para o conteúdo principal | Sim, é o link «Saltar para o conteúdo» |
| 13 links para contornar blocos de conteúdo | São os links do menu e do rodapé para as secções, e o «Ver o feed» do hero |
| 1 imagem com `alt=""` | É o símbolo do IEFP no cabeçalho. O nome «IEFP Rio Meão» já está escrito ao lado, por isso a imagem é decorativa |
| Idioma marcado como `pt-PT` | Correto |
| 21 cabeçalhos na página | A ordem h1 → h2 → h3 não tem saltos |
| 36 combinações abaixo do contraste AAA (7:1) | O nível pedido é o AA (4,5:1) e todas o cumprem. O AAA é opcional |

## 9. Fontes

A lista completa, com datas de consulta, está em [FONTES.md](FONTES.md). Resumo:

- **Contactos:** [página do serviço no iefp.pt](https://www.iefp.pt/detalheservico?id=323697) e [Instagram do centro](https://www.instagram.com/riomeaocontigo_iefp/) (email)
- **Cursos:** [iefponline](https://iefponline.iefp.pt/IEFP/pesquisas/search.do?cat=ofertaFormacao&ccentro=195)
- **Áreas:** [formação para jovens](https://www.iefp.pt/formacao-para-jovens), [para adultos](https://www.iefp.pt/formacao-para-adultos) e [RVCC](https://www.iefp.pt/rvcc) no iefp.pt
- **Feed e fotos do feed:** [@riomeaocontigo_iefp](https://www.instagram.com/riomeaocontigo_iefp/)
- **Cores e fontes:** CSS do [iefp.pt](https://www.iefp.pt)
- **Estrutura de referência:** página inicial do [FAD do IEFP](https://fad.iefp.pt)
- **Logótipo e favicon:** símbolo oficial do IEFP, publicado no [FAD](https://fad.iefp.pt)
- **Inspiração do botão dia/noite:** [animação no Pinterest](https://i.pinimg.com/originals/87/f9/ee/87f9eefefc480ce4416d353cd060dfc0.gif) (só a ideia; o código e as cores são próprios)
- **Ícones:** [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Tipografia:** [Google Fonts](https://fonts.google.com/)
- **Mapa:** [Google Maps](https://www.google.com/maps/search/?api=1&query=40.959358,-8.593725), com as coordenadas da página oficial do serviço

## 10. Dificuldades e soluções

- **Os dados não estavam todos no mesmo sítio.** O iefp.pt não tem o email do centro nem notícias do Rio Meão. Encontrei o email e as notícias no Instagram do próprio centro e registei de onde veio cada dado.
- **Emprego e Apoios não existem no Rio Meão.** Comecei com os cartões Formação, Emprego e Apoios, copiados do menu do iefp.pt. A página oficial mostra que o Rio Meão só faz formação, por isso troquei para Jovens, Adultos e Centro Qualifica.
- **Contraste no modo noturno.** As cores do IEFP são escuras. Medi o contraste de todas as combinações e criei versões mais claras para o modo noturno.
- **Scroll horizontal no telemóvel.** As linhas com `g-5` do Bootstrap têm margens negativas maiores do que a margem do contentor e saíam da página. Troquei para `gx-4 gy-5`.
- **Interruptor escondido no telemóvel.** Estava dentro do menu que fecha. Passei-o para fora do menu, entre o logótipo e o botão, e uso `order` para ficar no fim no computador.
- **Cartões apertados no tablet.** A 768 px os 3 cartões ficavam com 216 px de largura, o mesmo erro do FAD. Agora só ficam em 3 colunas a partir de 992 px.
- **Detalhes dos cursos numa secção à parte.** Obrigava a saltar para baixo e voltar. Passaram para o verso de cada cartão, que vira com uma checkbox e CSS.
- **Fotos do Instagram com pouca resolução e formatos diferentes.** Uso `aspect-ratio` e `object-fit: cover` para ficarem todas com o mesmo formato.
- **A página subia ao ligar o modo escuro.** A cada clique subia 72 px. A causa era a regra `[id] { scroll-margin-top }`, feita para os saltos do menu, que também se aplicava à checkbox do botão: quando a checkbox recebia o foco, o browser fazia scroll para a afastar do topo. Limitei a regra a `section[id]`. Nos cartões acontecia o mesmo, porque a checkbox estava no canto de cima. Passei-a para o fundo, junto do «Saber mais».
- **Setas repetidas.** Nos cartões das áreas a seta → ficava colada ao ícone de ligação externa. Tirei a seta, e o ícone externo passou a ser a seta e a animar ao passar o rato.
- **Morada repetida.** A morada aparecia em 4 sítios (hero, cartão do Sobre nós, mapa desenhado e contactos). Experimentei um mapa desenhado em CSS no Sobre nós, mas chamava mais a atenção do que devia e não era real. Deixei a morada só nos contactos, com o mapa real do Google Maps, e o Sobre nós passou a mostrar os objetivos em cartões.
- **Cache do GitHub Pages.** Depois de cada push o site publicado demorava a mostrar o CSS novo. Para testar, forçava o recarregamento dos ficheiros.

Testado em 320, 375, 768, 995, 1280 e 1920 px, nos dois modos.
