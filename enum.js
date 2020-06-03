// Enum型（列挙型）
// 命名はパスカルケース、中身要素の変数は大文字にするのが通例
var PrizeName;
(function (PrizeName) {
    PrizeName["KOU"] = "KOU";
    PrizeName["OTSU"] = "OTSU";
    PrizeName["HEI"] = "HEI";
    PrizeName["TEI"] = "TEI";
})(PrizeName || (PrizeName = {}));
var prize = {
    judgement: true,
    name: PrizeName.HEI
};
prize.name = PrizeName.HEI;
// 明示的に'='を使わなかったら、初期値０始まりとして値が割り振られ、1,2,,,と続いていく。
var CountNumber;
(function (CountNumber) {
    CountNumber[CountNumber["FIRST"] = 0] = "FIRST";
    CountNumber[CountNumber["SECOND"] = 1] = "SECOND";
    CountNumber[CountNumber["THIRD"] = 2] = "THIRD";
    CountNumber[CountNumber["FOURTH"] = 3] = "FOURTH"; // 3
})(CountNumber || (CountNumber = {}));
// ////////
// Enum型を使う理由
// 上記をやらないと、prize.nameに対して、下記のように関係ないstr型が再代入できてしまう
// const PrizeName = {
//   KOU: 'KOU',
//   OTSU: 'OTSU',
//   HEI: 'HEI',
//   TEI: 'TEI',
// }
// const prize = {
//   judgement: true,
//   name: PrizeName.HEI
// }
// 無関係な文字列も入ってしまう。
// prize.name = 'good morning'
