---
layout: post
title: USANDO KALI EM PENDRIVE
author: Gabriel Kalani
---

Já pensou em usar o Kali Linux em um pen-drive?
Então, "simbora"!!

## USANDO KALI EM PENDRIVE
-----

Olá terráqueos,
Tudo beleuza creuza?

<br> Então, recentemente descobri o GRANDIOSO sistema
Kali Linux.<br> P*** que par**! QUE SISTEMÃO DA P**R@

E eu resolvi instalar ele, só que de fato eu não tenho um computador próprio
(vida de “xofem” é assim mesmo), porém lá estava eu *num *belo dia ensolarado
com pássaros cantarolando e eu lembro como se fosse ontem.

Eu estava nas ruas da minha amada Belém ̶f̶u̶m̶a̶n̶d̶o̶ caminhando, pensando se
eu já tomei leite da mesma vaca duas vezes ou até mesmo se eu for jogar Jokenpô
na cracolândia e eu jogar pedra, os caras iriam fumar minha mão?

Eu lembro como se fosse ontem…

> Realmente foi ontem…

Chegando ao fim dessa enrolação, eu vou ensinar como você cria um Persistence do
SISTEMÃO DA P**R@, o Kali Linux.<br> É muito fácil, você só vai precisar de
alguns recursos.<br> 1º — Um pendrive, de preferência com tamanho de 8GB ou
mais.

2º — A última versão do Kali Linux (você pode baixar
[aqui](https://www.kali.org/downloads/).)

> Em relação a versão do Kali Linux, baixe Kali Linux 64 bit ou Kali Linux 32 bit,
> não baixe **Mini, e17, Mate, Xfce, LXDE, armhf, armel**.

> Eu citei todas, menos a **Light**, bom ela pode ser considerada como uma segunda
> opção, ela não vem como todos os recursos da versão normal, mas não significa
que você não possa instalar elas (o que eu não recomendo muito).

E a 3º e último recurso que obviamente é um Computador.

Aí, você se pergunta:

**Lord Gabriel***, como instalarei este SISTEMÃO DA P**R@ em meu Pendrive?*

E então responder-te-ei : Há muito tempo foi lançado o **Rufus.**

Bem, o Rufus é especialmente útil em casos onde: <br> •Você precisa criar uma
mídia de instalação USB a partir de ISOs bootáveis (Windows, Linux, UEFI,
etc.)<br> •Você precisa trabalhar em um hardware que não possui sistema
operacional (OS) instalado<br> •Você precisa rodar um BIOS ou outro firmware a
partir do DOS<br> •Quer executar programas de baixo nível

> Ah, e Rufus é rápido. Ele chega, por exemplo, a ser 2 vezes mais rápido que
> Unetbootin, Universal USB Installer.

Baixe [aqui](https://rufus.akeo.ie/?locale=pt_BR) pelo próprio site do programa.

Depois de ter baixado, o Rufus e a imagem do Kali, é hora de instalarmos a
imagem no pendrive…

Abra o Rufus e configure-o conforme mostra a imagem abaixo.

![](https://cdn-images-1.medium.com/max/800/1*tUqGeg9eyfh579X3cuh7Hg.png)
<span class="figcaption_hack">Dê o nome para o pendrive de “UUI”</span>

Não deixe faltar nenhuma opção e de preferência deixe igual a imagem, porém,
você terá que escolher seu pendrive logo na primeira opção.<br> Já a imagem do
sistema, está logo ali onde está escrito “FreeDOS”, clique ao lado dela em um
icone e escolha a *.ISO, logo a opção do “FreeDOS” irá se alterar para “Imagem
ISO”, depois de ter escolhido o arquivo. clique em “Iniciar”. O processo demora
muito então tenha paciência.

![](https://cdn-images-1.medium.com/max/800/1*3Pja0lulMudHvUJCkW1C9A.png)

Agora vamos criar uma partição adicional no nosso Pendrive para os nossos
arquivos. ISSO É OBRIGATÓRIO, PESSOAL!

Para isso, baixe o [MiniTool Partition Wizard
Free.](http://www.partitionwizard.com/download.html) Após ter baixado e
instalado ele, abra o programa.

![](https://cdn-images-1.medium.com/max/800/1*HX_vN9SAA2UQyV24gVBj5g.jpeg)
<span class="figcaption_hack">Procure pelo seu pendrive, clique com o botão direito e escolha a opção
**Move/Resize **.</span>

Logo irá aparecer uma pequena tela, onde está escrito “Size and Location”,
mantenha pressionado o botão esquerdo de seu mouse no pequeno desenho preto, o
que chamamos de **arrow** **.**

Vá diminuindo até onde puder, feito isso clique em **OK.**

Depois disso ele vai criar uma partição adicional não-alocada, com o botão
direito sobre ele clique em “Create”, vai abrir uma tela e configure-o conforme
a imagem abaixo.

![](https://cdn-images-1.medium.com/max/800/1*J_0gWnK5d0041sbv2ciUYg.jpeg)
<span class="figcaption_hack">Em partition Label, o nome deve ser “Persistence”. Create As deve ser “Primary”
e File System deve ser Ext4</span>

Clique em OK, e depois em “Apply” no canto superior da tela. O processo irá
demorar um pouco e tenha mais paciência ainda…

Depois disso… Reinicie seu computador e dê o BOOT em seu pendrive.

E você vai se deparar com a seguinte tela

![](https://cdn-images-1.medium.com/max/800/1*TFFp3oa2XR-27P5vp6hWaA.png)

Vá para a opção “Live USB Persistence”, logo vai aparecer um bocado de texto e
depois o sistema vai iniciar.

Certifique-se de que no Desktop há uma unidade chamada “Persistence” que é a
partição “sim-alocada” que criamos agora pouco.

Abra um terminal e digite os seguintes comandos.

> fdisk -l

Lembram que seu Pendrive tinha as partições FAT32 e uma Ext4 (Linux)?

Procure saber qual é o seu **Device Boot.**

Geralmente elas são /dev/sdb2 ou /dev/sdc2, apenas procure saber qual é.

> mkdir -p /mnt/UUI

Essa UUI, é o nome do nosso pendrive que usamos no Rufus, caso tenha colocado
outro nome, mude esta opção. No meu caso, utilizei UUI

> mount /dev/sdb2 /mnt/UUI

Após o “mount” coloquei meu Device Boot Ext4 (Linux), como eu disse antes,
procure saber qual é o seu.

> echo “/ union” > /mnt/UUI/persistence.conf

> umount /dev/sdb2 && reboot

Usando este último comando, seu computador irá reiniciar. Sempre que quiser usar
o Kali, use a tecla de BOOT com o pendrive conectado e escolha a unidade.<br>
Logo vamos nos deparar com uma tela que vimos antes

![](https://cdn-images-1.medium.com/max/800/1*TFFp3oa2XR-27P5vp6hWaA.png)
<span class="figcaption_hack">Clique em Live USB Persistence</span>

Bem, não escolha nada ainda, deixa eu fazer uma explicação.

O Kali já está pronto para uso, agora sempre que quiser usa-lo escolha a opção
“Live USB Persistence” e você não precisará configurar tudo novamente.<br> Logo
na primeira inicialização, escolha Live USB Persistence, aperte **TAB **e logo
abaixo aparecerá um texto de configuração, aperta espaço e digite Persistence e
depois dê Enter.

Agora espere o sistema iniciar e seja Feliz.<br> Lembrando que quando quiser
usar o sistema, não precisará usar as linhas de comandos citadas anteriormente,
mas caso no Desktop ainda esteja a unidade Persistence, refaça o tutorial, caso
ele tenha sumido… Relaxe, ele já está configurado.

E também para liga-lo, escolha sempre a opção Live USB Persistence e não será
preciso usar o TAB e digitar Persistence.

Tudo está pronto! Não há nada mais para fazer.

Em casos de dúvidas, poste nos comentários ou entre em contato.

Abraços
