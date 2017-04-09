---
layout: post
title: COMO CRIAR PULL REQUESTS SEPARADOS - PARTE 2
author: Gabriel Kalani
---

Já pensou em aprender a criar Pull Request's separados?
Então, "simbora"!!



Olá terráqueos,
Tudo beleuza creuza?

Então, Eu iniciei uma série de posts aqui sobre o envio de Pull Requests separados e vamos continuar.

[COMO CRIAR PULL REQUESTS SEPARADOS - PARTE 1](https://gkal19.github.io/2016/07/11/pull-request-separados-1.html)

Anteriormente, aprendemos sobre branchs e como cria-las e acessa-las.

Agora vamos continuar >>>. KATIAU

Então, nós haviamos acessado nossa branch criada.

![trocando a branch](http://i.imgur.com/oKjBTvM.png)

No meu caso eu criei `patch-10` que é a em que exercício eu estou e devemos adicionar o a pasta com seu username e os arquivos do exercício dentro.
Como eu disse anteriormente:

> Criei a pasta `class-10` e nela criei mais uma pasta com meu username e os arquivos do exercícos dentro.
Essa é a nova "norma" para enviar exercícios no BeMEAN, creio eu que será assim a partir do módulo de Angular1.

Para adicioanar os arquivos utilizamos:
```shell
$ git add [pasta-do-exercício]
```

> Em seu fork você deve ter várias `class-[número-da-aula]`, no meu caso -- repetindo -- Criei a pasta `class-10` e nela criei mais uma pasta com meu username e os arquivos do exercícos dentro.

Então, simplesmente usei o comando `git add class-10` junto com a pasta com meu username dentro. Feito isso você deve fazer o seu commit.

> O que é Commit?

Suponhamos que você consertou um erro seu site/software/projeto ou sei-lá-o-que, chegou a hora de você commitar essa modificação e elas serão inseridas no repositório do seu projeto e outras pessoas poderão ver. 
E é isso que o commit faz, Assim essa modificação não fica perdida e todo mundo sabe do que se trata aquela mudança.

"Commitaremos" com o comando:
```shell
$ git commit -m "Seu Nome - Exercício [número-do-exercício-aqui] - Resolvido"
```

No meu caso, eu fiz:
```shell
$ git commit -m "Gabriel Kalani - Exercício 10 - Resolvido"
```

Após isso, vamos enviar e qual comando utilizamos?

```shell
$ git push origin master
```

Porém, você não vai fazer essa merda, você estará enviando para a branch principal `master` e nós queremos enviar para a branch que criamos.

```shell
$ git push origin patch-10
```

> `Patch-10` é a branch que eu criei, no seu caso, você pode estar enviando para `patch-1`,`patch-2`,`patch-3` e por aí vai.

No meio desse processo, ele deve pedir seu login e senha do GitHub, na hora da senha, poderá não aparecer nada é normal, só está invisível mas sua senha vai estar lá.

Agora sim, mano!
Depois que enviar, visite seu fork do módulo em que está e verá que seu commit foi feito.

> Mas meu commit não aparece...

Você deve repetir os passos anteriores, ou você simplesmente esqueceu de clonar o seu fork.

Se seu commit funcionou! Parabéns :smile:

Está feito! Mentira!

Depois disso, vamos ao repositório oficial de seu exercício e ao acessar, você pode ver algo novo escrito:

> Compare & Pull Request

Clique e crie seu Pull Request e seja feliz, meu bruxo.

Aqui funcionou certinho e enviou os 5 arquivos que estavam dentro da pasta com meu `class-10` e agora é só esperar o Suissa fazer a correção de seus RESPECTIVOS exercícios.

Vamos finalizar por aqui, se tem alguma dúvida, sugiro que me contate pelo meu facebook, twitter ou algo do tipo. com o id @gkal19
Também estou no Telegram, nos grupos da Webschool e meu e-mail é gabrielsilva1956@gmail.com


Abração =D
