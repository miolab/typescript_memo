// Literal型
// 指定した要素そのものだけを入れられる。
var im = "im";
// const使うと、型推論でLiteral型になる。
// （letでString型..みたいにならずに）
var mimimi = "mimimi";
var zero = 0;
// xx エラーパターン xx
// const mimimi: "mimimi" = "mmm";
// zero = 3;
// Union型と併用すると便利（短いEnum型っぽく使える）
var eva = "kyu";
var prize = {
    order: 3,
    name: "hei"
};
