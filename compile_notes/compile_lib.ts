const hello: string = 'Hello!';

// tsconfig.json のlibを設定（コメントアウト外して）する場合、その内容により受ける影響
// console ... "DOM"有無
// toUpperCase() ... "ES6"有無
console.log(hello.toUpperCase());