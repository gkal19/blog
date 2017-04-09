---
layout: post
title: COMO CRIAR PULL REQUESTS SEPARADOS - PARTE 1
author: Gabriel Kalani
---

Já pensou em aprender a criar Pull Request's separados?
Então, "simbora"!!



Olá terráqueos,
Tudo beleuza creuza?

Pô, então... O Tio Suissa me pediu para dar uma aula para a galera do BeMEAN ensinando o envio dos seus RESPECTIVOS exercícios de devidos Módulos em que se encontram seus alunos.
**Falei pouco mais falei bonito**
Bem, nós, alunos enviamos nossos exercícios por meio de Pull Requests, mas se você for criar 1 PR, ele vai criar normalmente, porém, digamos que queiras enviar o exercício de outra aula e for criar um PR, ele vai juntar tudo em um e vai ficar muito bagunçado.
Por meio de pesquisas, eu aprendi a envia-los por meio de Branchs.

> O que é uma **Branch**

Um branch no Git é simplesmente um leve ponteiro móvel para um desses commits. 
O nome do branch padrão no Git é master. Como você inicialmente fez commits, você tem um branch principal ( master branch ) que aponta para o último commit que você fez. 
Cada vez que você faz um commit ele avança automaticamente.

![branch](https://git-scm.com/figures/18333fig0303-tn.png)

Acho que você já deve ter tido uma noção do que é uma **branch**

Enfim, vamos lá!
Suponhamos que você deseja enviar o exercício #10 do módulo de Angular1.
Para criar uma **branch** utilizamos o comando:
```shell
$ git branch [insira o nome da branch]
```

> A parte onde está escrita "[insira o nome da branch]" deve ser substituída por `patch-[número da aula de seu modulo]` e não deve conter chaves ou espaços.

Ao checar o terminal, poderá ver que ele estará na branch principal `master`, mas para fazer o trocar de branchs, utilizamos:

```shell
$ git branch [nome da sua branch]
```

E quando você for ver, ele já terá feito a "transação" para o outro Ramo.

![trocando a branch](http://i.imgur.com/oKjBTvM.png)

O próximo passo será adicionar o seu exercício, como irei enviar o exercício #10 de Angular, terei eu de adicionar a class-10 -- já que eu sou o único que está na frente em exercícios de Angular.
Criei a pasta `class-10` e nela criei mais uma pasta com meu username e os arquivos do exercícos dentro.
> Essa é a nova "norma" para enviar exercícios no BeMEAN, creio eu que será assim a partir do módulo de Angular1.

Então, vamos terminar o post por aqui.

[COMO CRIAR PULL REQUESTS SEPARADOS - PARTE 2](https://gkal19.github.io/2016/07/11/pull-request-separados-2.html)

Abração =D
