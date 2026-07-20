---
layout: home
title: AISCGre – Seção Brasileira

hero:
  image:
    jpg: /photos/manuscrito-e121.jpg
    webp: /photos/manuscrito-e121.webp
    alt: "Inicial P historiada em ouro e vermelho abrindo o introito Puer natus est nobis, no Codex Einsiedeln 121."

congress:
  kicker: "Congresso · Agosto de 2026"
  title: "1.º Congresso Internacional de Coros Litúrgicos"
  motto: "Cantate Domino canticum novum"
  meta:
    - term: Datas
      detail: "28 a 30 de agosto de 2026"
    - term: Local
      detail: "Campinas · SP · Brasil"
  cta:
    text: "Garanta sua vaga"
    url: "https://congressosmusicais.com.br/"
  speaker:
    image:
      jpg: /photos/frisina.jpg
      webp: /photos/frisina.webp
      alt: "Monsenhor Marco Frisina."
    label: "Palestrante principal"
    name: "Mons. Marco Frisina"
    role: "Compositor e Maestro do Coro da Diocese de Roma"

photo:
  image:
    jpg: /photos/diretoria-conselho.jpg
    webp: /photos/diretoria-conselho.webp
    alt: "Diretoria e conselhos da AISCGre — Seção Brasileira reunidos em encontro institucional."

board:
  - title: Diretoria
    roles:
      - role: Presidente
        name: "Prof. Dr. Clayton Júnior Dias"
      - role: Vice-presidente
        name: "Pe. Breno Cury Alheiro da Silva"
      - role: "1.º Secretário"
        name: "Prof. Me. Diego da Silva Lima"
      - role: "2.º Secretário"
        name: "Willian Lovato"
      - role: "1.º Tesoureiro"
        name: "Pe. Filipe Gonçalves Macêdo"
      - role: "2.º Tesoureiro"
        name: "Lucas Siduoski"
  - title: Conselho Fiscal
    members:
      - "Edwin Aldrin Corrêa Lima"
      - "Me. Laércio Benedito Savali de Sousa"
      - "Nivaldo Aparecido de Souza Júnior"
  - title: Conselho Consultivo
    members:
      - "Dr. Antonio Carlos Silvano Pessotti"
      - "Daniela Ayres da Rocha"
      - "Dr. Fernando Sávio da Conceição Cury"
      - "Prof. Me. Felipe Antônio Bernardo"
      - "Prof. Dr. Giovanni Conti"
      - "Me. Danilo Martins Ferreira"
      - "Prof. Dr. André Alves Gaby"

forms:
  individual: "https://forms.gle/e5MoEySuPeh2vAAC7"
  coros: "https://forms.gle/Ejf5At9vzqDzZQH27"

estatuto:
  file: /documentos/estatuto-social-aiscgre-brasil.pdf
  title: "Estatuto Social da AISCGre — Seção Brasileira"
  meta: "PDF · 13 páginas"
  cover:
    jpg: /documentos/estatuto-capa.jpg
    webp: /documentos/estatuto-capa.webp
---

<!-- HERO -->
<HomeHero :image="$frontmatter.hero.image">
  <template #kicker><a href="https://www.aiscgre.org/" target="_blank" rel="noopener">Associação Internacional de Estudo do Canto Gregoriano</a></template>
  <template #title><span class="rubric-initial">P</span>esquisar, ensinar e <em>interpretar</em> o repertório gregoriano no Brasil.</template>
  <template #dek>A AISCGre — Seção Brasileira dá continuidade, no país, à orientação semiológica inaugurada por Dom Eugène Cardine, OSB.</template>
  <template #actions>
    <a class="cta" href="#pessoa-fisica">Associe-se</a>
    <a class="cta cta--ghost" href="#aiscgre">Saiba mais</a>
  </template>
  <template #caption>Intróito <em>Puer natus</em> no Codex Einsiedeln 121</template>
</HomeHero>

<!-- BANNER: CONGRESSO -->
<CongressBanner :congress="$frontmatter.congress" />

<!-- O QUE É A AISCGRE -->
<HomeSection id="aiscgre" label="A AISCGre">

## Pesquisa, ensino e prática do canto gregoriano.

A AISCGre dá continuidade à orientação semiológica iniciada por *Dom Eugène Cardine, OSB* (1905–1988), guiada pelo princípio da simbiose entre texto e melodia.

<PairGrid>
<PairItem title="Abordagem">

A semiologia gregoriana conduz da paleografia à compreensão do significado musical e expressivo da notação neumática.

</PairItem>
<PairItem title="Atuação">

Pesquisa, publicação científica, ensino em diversos níveis e organização de cursos, conferências, concertos e gravações.

</PairItem>
</PairGrid>

</HomeSection>

<!-- FUNDAMENTOS ECLESIAIS -->
<HomeSection id="fundamentos" label="Fundamentos" alt>

## Em continuidade com o magistério da Igreja.

O trabalho da AISCGre desenvolve-se em comunhão com o Magistério e à luz do Concílio Vaticano II, que recomendou expressamente a continuidade da pesquisa científica sobre os livros de canto gregoriano.

<div class="citations">
<CitationBlock>

Procure terminar-se a edição típica dos livros de canto gregoriano; prepare-se uma edição mais crítica dos livros já editados depois da reforma de S. Pio X.

<template #cite>Concílio Vaticano II · <em>Sacrosanctum Concilium</em>, §117</template>

</CitationBlock>
<CitationBlock>

A fundação da Seção Brasileira da AISCGre representa um passo importante no fortalecimento da pesquisa, da formação e da prática qualificada do canto gregoriano em nosso país, sempre em comunhão com o Magistério da Igreja e com o espírito do Concílio Vaticano II.

<template #cite>Dom Ricardo Hoepers · Secretário-Geral da CNBB<br/>Mensagem ao <em>Laudis Canticum</em> · dezembro de 2025</template>

</CitationBlock>
</div>

</HomeSection>

<!-- THRESHOLD: contexto internacional -->
<ThresholdQuote kicker="Contexto Internacional" aria-label="contexto internacional">Mais de <em>700 membros</em> em <em>28 países</em>, organizados em seis seções — alemã, brasileira, espanhola, italiana, japonesa e polonesa.</ThresholdQuote>

<!-- SEÇÃO BRASILEIRA + FOTO + CONSELHOS -->
<HomeSection id="secao-brasileira" label="Seção Brasileira">

## A mais recente das seções da AISCGre.

A Seção Brasileira reúne associados de diversas regiões do país em torno da pesquisa, do ensino e da prática do canto gregoriano segundo a orientação semiológica. Seu núcleo fundador consolidou-se a partir da atuação do **Prof. Dr. Clayton Júnior Dias**, primeiro presidente da seção.

<PhotoFigure :image="$frontmatter.photo.image">
  <template #caption>Diretoria e Conselhos da AISCGre — Seção Brasileira, inclusive seu Presidente Prof. Dr. Clayton Júnior Dias, junto ao Prof. Dr. Giovanni Conti, Consultor do Dicastério para o Culto Divino e a Disciplina dos Sacramentos, vice-presidente da AISCGre Internacional e presidente da Seção Italiana.</template>
  <template #credit>Foto: <a href="https://www.instagram.com/beatrizclleal/" target="_blank" rel="noopener">@beatrizclleal</a></template>
</PhotoFigure>

<BoardRoster :groups="$frontmatter.board" />

</HomeSection>

<!-- PESSOA FÍSICA -->
<HomeSection id="pessoa-fisica" label="Associação para Pessoa Física" alt>

## Para estudantes, pesquisadores, regentes, cantores e apoiadores.

Podem associar-se aqueles que reconheçam e apoiem a missão da AISCGre — Seção Brasileira e tenham interesse no estudo, na prática, na pesquisa ou na promoção do canto gregoriano. Entusiastas e apoiadores podem ser admitidos como colaboradores.

<p><a class="cta" :href="$frontmatter.forms.individual" target="_blank" rel="noopener">Formulário Individual</a></p>

</HomeSection>

<!-- COROS E INSTITUIÇÕES -->
<HomeSection id="coros-instituicoes" label="Associação para Coros e Instituições">

## Para *Scholæ*, corais litúrgicos e instituições culturais.

A AISCGre — Seção Brasileira acolhe tanto Coros dedicados ao canto gregoriano quanto Coros de repertório mais amplo que observam os princípios da semiologia ao executar o repertório gregoriano. Os Coros associados se classificam em duas categorias:

<PairGrid equal>
<PairItem title="Efetivos">

Grupos com estudo e prática regulares segundo os princípios semiológicos reconhecidos pela AISCGre, com regente ou diretor(a) com formação comprovada na área.

</PairItem>
<PairItem title="Afiliados">

Grupos que promovem ou incluem o canto gregoriano em seu repertório, mantendo vínculo institucional e cultural com a associação.

</PairItem>
</PairGrid>

<p style="margin-top: var(--s-5);"><a class="cta" :href="$frontmatter.forms.coros" target="_blank" rel="noopener">Formulário para Coros e Instituições</a></p>

</HomeSection>

<!-- ESTATUTO SOCIAL -->
<HomeSection id="estatuto" label="Estatuto Social" alt>

## O documento que rege a Seção Brasileira.

O Estatuto Social define a finalidade, a composição do quadro associativo, a estrutura de governança e o regime patrimonial da AISCGre — Seção Brasileira. Sua leitura é recomendada a todos os que pretendem associar-se.

<DocumentEmbed
  :file="$frontmatter.estatuto.file"
  :title="$frontmatter.estatuto.title"
  :meta="$frontmatter.estatuto.meta"
  :cover="$frontmatter.estatuto.cover"
/>

</HomeSection>
