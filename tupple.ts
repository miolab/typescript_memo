// タプル型の型注釈
const book: [string, number, boolean] = ['history', 2000, true]

// 指定外の型要素があったり、指定要素数に合致していなかったりしたらエラーになる
// エラー（型が不一致）
// const bookFalse2: [string, number, boolean] = [333, 2000, true,]
// エラー（要素が指定数より多い）
// const bookFalse1: [string, number, boolean] = ['history', 2000, true, 1]