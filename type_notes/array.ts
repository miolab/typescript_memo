// 配列型の型注釈
const fruits: string[] = ['apple', 'banana', 'orange'];

const fruit = fruits[1];
console.log(fruit.toUpperCase());

/* 確認
$ tsc array.ts
$ node array.js
BANANA
*/