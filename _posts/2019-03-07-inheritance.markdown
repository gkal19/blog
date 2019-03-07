---
layout: post
title: INTRODUÇÃO A HERENÇAS NO JAVASCRIPT
author: Gabriel Kalani
---

Herença (Inheritance) em JavaScript

JavaScript utiliza uma abordagem diferente para compartilhar código entre entidades, chamada de orientação a protótipo.
Nessa linguagem (quase) tudo é um objeto. Até mesmo as funções são objetos...<br>
No JavaScript, a herança se dá por meio de uma referência interna chamada prototype, que todos os objetos possuem.
Nesse caso do JavaScript, isso é particularmente útil para métodos.

Abaixo coloquei um exemplo básico.

```JS
function cuidadorDeGatos(){}
 var cuidadorDeGatos = new cuidadorDeGatos();
 
function cuidadorDeGatos(){}
cuidadorDeGatos.prototype.cuidarDeGatinhosFofinhos = function(){
 return true;
}
 var cuidadorDeGatos = new cuidadorDeGatos();
 
console.log(cuidadorDeGatos.cuidarDeGatinhosFofinhos());
```

Acima podemos ver um exemplo bem bacana
Criei uma classe denominada de `cuidadorDeGatos` que no começo estava vazia e depois disso havia adicionado um método `cuidarDeGatinhosFofinhos`. Uma coisa bem interesante sobre um protótipo, é que ele nos permite predefinir propriedades, incluindo métodos.

O JavaScript tem somente um construtor quando se trata de: 
- Herenças
- Objetos

Em JavaScript, qualquer função pode ser adicionada em um objeto em forma de propriedade. Uma herança de funções age como a herança de quaisquers outras propriedades que não sejam funções, e podemos inclusive realizar sobre-escrita de função

Veja abaixo mais um exemplo:

```JS
function user(){}
 var user = new user();
 
function user(){}
user.prototype.minerarBitcoins = function(){
 return true;
}

var user = new user();
 
console.log(user.minerarBitcoins());
```

No exemplo acima vemos que a classe `user` possui um método que é `minerarBitcoins`.

Em Javascript existe a possibilidade de se programar orientado a objetos, embora este estilo de programação nesta linguagem seja um pouco diferente, e acabe causando espanto nos iniciantes. Principalmente para quem é acostumado com linguagens como Java, o estilo de código orientado a objetos em Javascript é muitíssimo diferente.

```JS
var pessoa = {
  // Características do objeto `pessoa`
  resolverTodosOsArtigos: function() {},
  aprender: function() {},
  comer: function() {},
  futebol: function() {},
  treinar: function() {}
};

var gabrielkalani = Object.create(pessoa);
gabrielkalani.resolverTodosOsArtigos();

```

Bom, acima vemos que eu defini um objeto chamado `pessoa` e também depois havia criado uma variável cujo valor é mostrar as características da pessoa. (Minha realidade agora rsrs)

## Compatibilidade nos navegadores.
Compatibilidade
O ES5 (ECMAScript 5) funciona parcialmente em versões do IE da 9 para as mais atuais. Na versão 9, funciona parcialmente.
Para quem prefere um Graceful Degradation.

Leia o artigo abaixo para que estes novos métodos funcionem em navegadores antigos.
- [ES5-Shim](https://github.com/kriskowal/es5-shim)

Vamos dar um ultimo exemplo:
```JS
function Usuario(user, email, senha, ultimoAcesso) {
  var user = "gkal19";
  var email = "gabrielsilva1956@gmail.com";
  var senha = "senha";
  var ultimoAcesso = Date.now();

  this.getUser = function() {
    return user;
  };

  this.getEmail = function() {
    return email;
  };

  this.getSenha = function() {
    return senha;
  };

  this.getUltimoAcesso = function() {
    return ultimoAcesso;
  };
}

```

## Instâncias
O que são as instâncias? Quando você cria um objeto ou seja, a instanciação de uma classe é realizada com uso do operador new.<br>
Após este operador vem o nome da função construtora, responsável pela inicialização do objeto.<br>
```JS
var obj = new Object();
var data = new Date();
```

## Literais de Objetos
Com os `Literais de Objetos` podemos criar e iniciar objetos de uma maneira diferente. A sintaxe é definida por uma lista de pares nome/valor separados por vírgulas entre um par de chaves. Cada par nome/valor é definido pelo nome da propriedade seguido de dois pontos e do valor correspondente.<br>
```JS
var Livro = {
  titulo: "A Sociedade do Anel",
  autor: "J. R. R. Tolkien",
  capitulos: 12,
  paginas: 434
};

// Acessando as propriedades:
console.log(
  Livro.titulo +
    " ( " +
    Livro.autor +
    " ) possui " +
    Livro.capitulos +
    " Capítulos e " +
    Livro.paginas +
    " Páginas"
);
```

## Objetos Construtores
Um dos meios mais comuns de se criar um objeto é com o construtor `Object`.Ele é uma função usada para inicializar novos objetos, e você usa a palavra-chave `new` para chamar o construtor.
```JS
var artigo = new Object();
artigo.sobreInheritance = function () {
	console.log("Chato d+ pra fazer!");
}
```

ATENÇÃO: Objetos podem conter qualquer outro tipo de dados, incluindo Numbers, Arrays e também outros objetos.<br>


## Conhecendo o `__proto__`

```JS
var animal = {
  comer: true
};

var gato = {
  parkour: true
};

gato.__proto__ = animal;

alert(gato.comer); // true

```

O `__proto__` é uma propriedade de acessoque expõe o Prototype interno do objeto através do qual é acessado.
A propriedade `__proto__` poderá também em uma definição literal de objeto para definir o objeto Prototype na criação, como uma alternativa ao `Object.create()`.

## Herança Multipla
Em linguagens de orientação a objetos, Herana Multipla é o conceito de herança de duas ou mais classes.

```JS
function Chocolate() {
  this.nome = "Kinder Ovo";
}
function kinderJoy() {
  this.valor = 7.35;
}

Chocolate.prototype = new kinderJoy();

Chocolate.prototype.imprimir = function() {
  return Chocolate.nome + " - R$ " + kinderJoy.valor;
};

```

Javascript não suporta múltipla herança pelo método de prototype que é o método que define o tipo do objeto, entretanto existe como contornar isso, um exemplo é a biblioteca zInherit (http://www.nczonline.net/downloads/) de [Nicholas C. Zakas](http://www.nczonline.net/writing/), autor dos excelentes livros “Professional Ajax” e “Professional JavaScript for Web Developers”.

## Heranças via Call e Apply
A diferença deles, é que o `apply` permite invocar a função com argumentos como uma matriz ; 
a `call` requer os parâmetros ser listados explicitamente;

```JS
function theFunction(name, IAm) {
  console.log("Eu sou " + name + " e eu sou " + IAm + ".");
}

theFunction.apply(undefined, [
  "Gabriel Kalani",
  "Student, Developer, Soccer Athlete"
]);
theFunction.call(undefined, "Batman", "a Noite");
Eu sou Gabriel Kalani e eu sou Student, Developer, Soccer Athlete.
Eu sou Batman e eu sou a Noite.
```

Só lembrando também que a herança que utiliza `call `e `apply` funcionam para itens públicos. Os itens privados precisam de algum método publico para uma chamada indireta.

```JS
obj = function() {
  var nome = "Gabriel";
  this.getNome = function() {
    return nome;
  };
};

```

## Heranças via Object Masquerading
É uma estratégia que emula a herança, um construtor associa todas as propriedades e métodos (com o paradigma de declaração de Construtor) usando a keyword `this` para o contexto interno do qual foi referenciado.
Porque o construtor é como uma função, voce pode montar o construtor de um objeto “A” dentro de um método de um objeto “B” e chamá-lo. O objeto “B” então recebe as propriedades e métodos definidos no construtor de “A” porque o this agora aponta para o contexto do novo objeto.

```JS
// Objeto que servirá de base
function A(sColor) {
  this.color = sColor;
  this.sayColor = function() {
    alert(this.color);
  };
}

// Objeto "B" que herdará de "A"
function B(sColor, sName) {
  this.newMethod = A;
  this.newMethod(sColor);
  delete this.newMethod;
  this.name = sName;
  this.sayName = function() {
    alert(this.name);
  };
}

var objA = new ClassA("red");
var objB = new ClassB("blue", "Gabriel");
objA.sayColor(); //outputs 'red'
objB.sayColor(); //outputs 'blue'
objB.sayName(); //outputs 'Gabriel'
alert(objB instanceof A); //false
alert(objB instanceof B); //true

```

Temos as mesmas chamadas de A em B com emulação completa da herança.O Object Masquerading suporta a implementação de múltipla herança.

## Keyword This
A palavra chave `this` faz referência ao escopo do objeto onde ela está sendo chamada.

```JS
function pessoa(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var me = new pessoa("Gabriel", "Kalani", 18, "black");

```

Então, este artigo é uma introdução á Heranças no JavaScript. Qualquer sombra de dúvidas podem mandar nos comentários que eu darei meu máximo para respondê-las.
Afinal eu sou um completo iniciante

Abração =D
