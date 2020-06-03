// 型推論
var hasBoolean = true;
// 型注釈（Type annotation）
// 以下の`: typehoge`にあたる部分。
var hasValue = false;
var count = 100;
var float = 1.73;
var negative = -0.001;
var single = 'im';
var double = "imim";
var back = "imimim";
var hogehoge;
// 値がまだ入っていないケースでは、型注釈つけないとany型となる。
var mogemoge;
// --------
// 型注釈
var im = {
    name: 'im',
    age: 20
};
// 型推論
var mimimi = {
    name: 'mimimi',
    age: 10
};
// ネストがあっても推論可
var imim = {
    name: {
        firstName: 'imim',
        lastName: 'mmmm'
    },
    age: 15
};
