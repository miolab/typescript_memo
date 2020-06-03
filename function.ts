// * 関数のパラメータと戻り値に型をつける
// （例）
// function addNumber(n1, n2) {
//   return n1 + n2
// }

function addNumber(n1: number, n2: number): number {
  return n1 + n2
}

// * 戻り値の方は型推論が効く。
//   省略可能だが、書く方を推奨。（ドキュメント的に明示できるため）
// * パラメータには型注釈すること。
//   なかったらany型になってしまう。

// /////////////////

// * Void型
// 何も返さない（returnがない）関数などで使う。
function greet(): void {
  console.log("Hello.")
}

// /////////////////

// * Undefine型
//   JSのundefinedを返す。
//   Undefine型は基本つかわない。
let temp: undefined;


// * Null型
let tmp: null;

// 両方の型とも、undefined か null を入れられる。


// * Unknown型・Any型
// どちらも、なんでも入れられる。
let anyParam: any;
let unknownParam: unknown;
let strHoge: string;

// Any型...（ただしAny型はなるべく使用しないことが望ましい）
anyParam = "hatena";
let str: string;
str = strHoge;

// Unknown型...すこし厳しめになる
unknownParam = "hatena";
let txt: string;
// txt = unknownParam;  // xx これはエラーになる xx

// Unknown型は使うならきちんと使う（JSのメソッドを織り交ぜた使用例）
if (typeof unknownParam === "string") {
  txt = unknownParam;
}


// * Never型（文字通り「何も返さない」時につかう）
function err(message: string) {
  throw new Error(message);
}
console.log(err("Error!"));

// /////////////////

// * その他、関数関連

// 型を変数に入れ、その変数に型注釈を付ける際、戻り値には=>で注釈つける
// （「:」がダブるため）
// 前半の変数部分注釈、後半の関数部分の注釈は、どちらか一方だけでもok。
const addNum: (num1: number, num2: number) => number = function(n1: number, n2: number): number {
  return n1 + n2
}

// アロー関数
const tenfold: (n: number) => number = n => n * 10;


// コールバック関数（例：cbFunc）
function tenfoldAndHandle(n: number, cbFunc: (n: number) => number): void {
  const tenfoldNum = cbFunc(n * 10);
  console.log(tenfoldNum);
}

tenfoldAndHandle(1, tenfoldNum => {
  return tenfoldNum
});
