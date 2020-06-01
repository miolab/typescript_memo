// 型推論
let hasBoolean = true;

// 型注釈（Type annotation）
// 以下の`: typehoge`にあたる部分。
let hasValue: boolean = false;
let count: number = 100;
let float: number = 1.73;
let negative: number = -0.001;
let single: string = 'im';
let double: string = "imim";
let back: string = `imimim`;

let hogehoge: string;
// 値がまだ入っていないケースでは、型注釈つけないとany型となる。
let mogemoge;


// --------

// 型注釈
const im: {
  name: string;
  age: number;
} = {
  name: 'im',
  age: 20
}

// 型推論
const mimimi = {
  name: 'mimimi',
  age: 10
}
// ネストがあっても推論可
const imim = {
  name: {
    firstName: 'imim',
    lastName: 'mmmm'
  },
  age: 15
}
