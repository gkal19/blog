---
layout: post
title: CONTRIBUIÇÕES NO GITHUB
author: Gabriel Kalani
---

Nesta postagem, vou falar sobre a importância de contribuir para outros projetos no GitHub.

Olá terráqueos,
Tudo beleuza creuza?

Pois é, nos últimos dias estou contribuindo para um ~caralho~ montão de repositórios existentes no GitHub. E isso me ajudou muito, mas muito mesmo.
Vou citar alguns aqui:

- [Webschool-io/Bot-Telegram-BeMEAN](https://github.com/Webschool-io/Bot-Telegram-BeMEAN) 
Aqui eu ajudei a criar dois "módulos" para que quando um usuário `entrar` em um grupo, o BOT poderá saudar ele com "Welcome to the jungle, baby!" ou até mesmo "Bem vindo ao Inferno". 
O mesmo será realizado quando o usuário `sair` do grupo, porém as mensagens serão "Saiu porque não aguentou a pressão!" e "Já vai tarde!".
Além desses módulos, atualizei alguns arquivos para o ES6 e eu conheci o [@rjmunhoz](https://github.com/rjmunhoz) e estou procurando ajudar ele em uma "transformação" do código atual do BOT para ES6.
Eu posso dizer que "noobei", pois ele me disse para implementar dois services e eu não sabia onde colocar e daí que isso resultou em 10 commits (8 commits tirando os 3 do Roz :laughing:). Mas no final, tudo deu certo e o Roz deu merge no PR.

![Commit mergeado](http://i.imgur.com/QKRisqC.pngg "Commit mergeado")

- [BibleJS/bible-portuguese](https://github.com/BibleJS/bible-portuguese) 
Aqui eu contribui com a criação de um README na linguagem Português do Brasil, como também na atualização dos pacotes que estavam no `package.json` e também algumas correções básicas.

- [samverneck/emojis-boladao](https://github.com/samverneck/emojis-boladao) 
De todos os que eu citei e vou citar, este foi o mais fácil. Com apenas 1 commit, 17 adições, 12 deleções. O repositório do [samverneck](https://github.com/samverneck] se tratava de um Cheatsheet do Emojis para o GitHub. 
Os erros existentes de tabelas, eu transformei [disso](https://github.com/samverneck/emojis-boladao/blob/354e70a5dddafbcec80bfb74235c11c9d186b503/README.md) para [isso](https://github.com/samverneck/emojis-boladao/blob/a37f0b9638790862156883c01b69c3402cec6469/README.md).
Foi super simples.

- [raphamorim/retro](https://github.com/raphamorim/retro) 
O que falar desse aqui? O meu preferido dentre todos. Esse é o projeto do [@raphamorim](https://github.com/raphamorim) que acabamos começando a nos falar pelo Telegram, trocamos algumas ideias e tal.
> Minimalist Vim Based Editor for the 30th Century
Ele foi o que me chamou muito mas muita atenção mesmo.

![RETRO](https://github.com/raphamorim/retro/blob/master/assets/images/example.png?raw=true "RETRO").

Nele eu fiz bastante correção do ECMAScript 6 em alguns arquivos. No final disso, o Rapha pediu para eu restaurar o código original de dois arquivos que não eram pra ser editados e me fez uma pergunta que era mais ou menos um "Por que usar as `arrow functions`?" 

Rapaz, nesse momento eu fiquei bem tenso. Pois fiquei bastante nervoso de falar algo errado ou até mesmo minha explicação sair tão ruim que ele não iria entender nada. E logo depois que eu envio o comentário respondendo a pergunta dele. Ele manda isso:

> "sobre arrow function relaxa tava só sendo implicante pra ver oq vc ia falar msm"

Uma bela trollagem :trollface:

Enfim, para este post não ficar tão longo vou deixar o link de alguns Pull Requests que eu trabalhei além destes que estão na lista.

- [Support for the Brazilian Portuguese language & ES6 fixed in Public/js/app.js](https://github.com/joeblau/gitignore.io/pull/347)
- [.gitignore for minified files](https://github.com/dvcs/gitignore/pull/13)
- [.gitignore for CSS files](https://github.com/dvcs/gitignore/pull/14)
- [.gitignore for Travis files & folders](https://github.com/dvcs/gitignore/pull/15)
- [.gitignore for Mule files](https://github.com/dvcs/gitignore/pull/16)
- [ES6 applied in some files](https://github.com/jekyll/jekyll-admin/pull/342)

Pois bem, o que é contribuir?

> colaborar na execução de algo; cooperar; Auxiliar ou ajudar no desenvolvimento de alguma coisa;

Contribuir com os projetos Open-Source - ou qualquer outro tipo - pode te ajudar na prática, mesmo se você for um Estudante ou um profissional em Front-End, Back-End. Se você se identifica com um projeto, causa ou algo do tipo, ajude-o a tornar melhor. 
Além da prática, isso irá te ajudar a trabalhar melhor em equipe.

Para começar, eu recomendo que você procure um repositório onde você se identifique. Dê um `fork` em seu perfil e clone-o. Execute o programa, veja como ele funciona, procure por bugs, erros de sintaxe ou até mesmo criar novas funcionalidades para esse projeto.

Agora suponhamos, que você entrou de cara em um projeto foi feito em uma linguagem de programação diferente da sua e você não sabe nada. Eu particularmente, recomendo que você crie uma `Issue`.
No GitHub, uma `Issue` é onde você pode tirar suas dúvidas, relatar problemas, bugs ou algo do tipo. Se puder levante o máximo de informações possíveis para que os contribuidores ou os idealizadores do projeto identifiquem o problema e solucionem ele por completo. 

IMPORTANTE: Nas `Issues`, é permitido também a criação de sugestões, sejam elas para uma nova funcionalidade ou algo relacionado a isso. E é claro, necessita de um bom comentário sobre sua ideia para que ~ a galera~ possam identificar.

Vale lembrar também daqueles projetos que querem ser "internacionais", porém não tem conhecimento de outros idiomas. Você pode também estar ajudando nisso. Foi o que eu fiz neste [Pull Request](https://github.com/joeblau/gitignore.io/pull/347) do projeto http://gitignore.io . Onde eu apenas criei uma cópia do `.json` original e renomeei ele para `pt-BR.json`.
O mesmo pode ser para documentações de linguagens de programação que também irá ajudar muito a comunidade que deseja aprender mas não domina bem o "Idioma raiz" daquele projeto.

Enfim, as contribuições além de ajudar a si mesmo na prática e no trabalho em equipe, isso irá ajudar a comunidade. Você pode contribuir da maneira que puder, nem que seja aquele ponto de interrogação que estava faltando. Eu garanto que nisso você vai estar evoluindo como um grande profissional. 
O importante é que os projetos melhorem muito mais dia a dia e com a sua ajuda isso pode ser possível. Se você não sabe por onde começar, faça isso que eu falei sobre os Bugs, Sugestões, Tradução e etc. Pois eu sei que você que tá lendo essa postagem é capaz de fazer qualquer coisa. E eu falo isso por experiência própria.
Mas com as contribuições, as pessoas podem e trabalham juntos de muitas maneiras diferentes e isso vai te ajudar a criar uma boa relação com eles, que é o que eu falei acima sobre o trabalho em equipe e quanto mais pessoas você tiver para te ajudar, melhor será para a procura e/ou solução de bugs, erros de sintaxe e etc...

Novamente citando o Raphael Amorim, recomendo que vocês vejam uma palestra dele na BrazilJS de 2015 cujo assunto é "[500 dias de Open Source](https://www.youtube.com/watch?v=toCdZ2e9Dh4)" . O objetivo final é motivar e mostrar como é fácil contribuir em projetos abertos.
> Meu livro que retrata a experiência de ter mergulhado de cabeça no mundo open source e escrever código útil diariamente por 500 dias seguidos..

Abraços
