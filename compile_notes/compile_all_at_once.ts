// * ディレクトリ内の複数tsファイルを、一気にコンパイルする
// `$ tsc --init` 実行（→ tsconfig.json が生成される）
// `$ tsc` 実行
// （→ tsconfig.json を見に行き、その内容に沿ってコンパイルが行われる。）
// （`tsc hoge.ts` みたいにファイル指定すると、tsconfig.json の設定は無視される）
// `-w` オプションも付帯可

let testMsg: string = 'test: compile all at once.';
console.log(testMsg);