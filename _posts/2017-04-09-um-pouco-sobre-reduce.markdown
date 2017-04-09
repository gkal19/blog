---
layout: post
title: UM POUCO SOBRE REDUCE
author: Gabriel Kalani
---

O `reduce` assim como o `map` e `filter` é uma função super-importante para a Programação Funcional em JavaScript.

Olá terráqueos,
Tudo beleuza creuza?

Agora são 03:00, e eu já vou dormir, mas antes resolvi criar uma postagem falando sobre o `reduce()`.

Hoje eu vim falar sobre o `reduce()` que aprendemos sobre ele em Programação Funcional em JavaScript assim como o `map` e o `filter`. Ele pode ser usado para encontrar um valor cumulativo ou concatenado com base em elementos de todo o ``array``.

> Reduce é uma função incrível! Esse método realiza um callback! Sua função? Reduzir um array à um único valor! Como faz isso? Aplica um callback para um acumulador a partir de cada valor em um array. O Reduce faz isso da Esquerda > Direita, o ReduceRight faz a mesma coisa porem da Direita > Esquerda. Ja que esse é um pouco mais complicado. [Por: Suissa](https://github.com/Webschool-io/workshop-js-funcional-free#reduce--reduceright)

No exemplo abaixo temos um código que faz a ``soma`` da idade de Físicos Importantes na História.
```js
const physicists = [
    { name:'Albert Einstein', age:76 },
    { name:'Isaac Newton', age:84 },
    { name:'Galileu Galilei', age:77 },
    { name:'Stephen Hawking', age:75 },
    { name:'Nikola Tesla', age:86 },
//    { name:'Gabriel Kalani', age:15 },
    { name:'Erwin Schrödinger', age:73 }
];

/*const sum = physicists.reduce( function( prevVal, elem ) {
    return prevVal + elem.age;
}, 0 );*/

const sumAge = physicists.reduce( ( prevVal, elem ) => prevVal + elem.age, 0 );

console.log("O valor é:" , sumAge) // 471

```

O `reduce`, como eu disse, com base de elementos de todo o `Array` (da esquerda para direita), deve reduzí-lo a um único valor.

> Como assim?

O valor retornado é o valor acumulado passado de ``callback`` para ``callback`` aí depois de todos os elementos terem sido alcançados, o `reduce()` vai retornar o valor acumulado/concatenado.

```js
array.reduce( function( prevVal, elem, index, array ) {
    ...
}, initialValue );
```

Argumentos | Função
--------- | ------
``prevVal``     | Valor cumulado retornado em cada iteração.
``initialValue``  | Objeto usado como primeiro argumento na primeira iteração.
``elem``    | Valor do elemento.
``array``    | Array ao qual a função ``reduce()`` foi executada.
``index``  | O índice do elemento que está sendo processado no ``Array``.

> Callback é uma função que é usada como "callback". Ela é tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.

Assim, como podemos fazer a Soma dos valores dentro de um Array, podemos também Multiplicar, Dividir e Subtrair todos eles.

No exemplo abaixo vamos concatenar os valores de `a` e `b`
```js
const reduzir = [[1, 9], [5, 6]].reduce(function(a, b) {
  return a.concat(b);
});

console.log(reduzir) // [ 1, 9, 5, 6 ]
```

> Resumidamente, o conceito de Concatenar seria colocar em ordem, prender ou encadear.

Para terminar, podemos também usar o `reduceRight()` que faz o mesmo porém da Direita para a Esquerda.
```js
const reduzir = [1, 2, 3, 4, 5].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});

console.log(reduzir) // 15
```

## Referências
[Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Summary)

[Workshop JS Funcional](https://github.com/Webschool-io/workshop-js-funcional-free)

Abração :smile:
