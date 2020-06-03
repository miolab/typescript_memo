// Literal型
// 指定した要素そのものだけを入れられる。
const im: "im" = "im";

// const使うと、型推論でLiteral型になる。
// （letでString型..みたいにならずに）
const mimimi = "mimimi";
const zero = 0;

// xx エラーパターン xx
// const mimimi: "mimimi" = "mmm";
// zero = 3;


// Union型と併用すると便利（短いEnum型っぽく使える）
let eva: "jo" | "ha" | "kyu" = "kyu";

const prize: {
  order: number;
  name: "ko" | "otsu" | "hei"
} = {
  order: 3,
  name: "hei"
}