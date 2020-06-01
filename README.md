# TypeScript Memo

`TypeScript`開発メモ。

- [公式](https://www.typescriptlang.org/)
- [GitHub](https://github.com/microsoft/TypeScript)
  - [Wiki](https://github.com/microsoft/TypeScript/wiki)

### 実行環境

- macOS 10.14.6

- VSCode

- 言語/その他

  | | バージョン | 備考 |
  | :-- | :-- | :-- |
  | TypeScript | 3.9.3 | |
  | Node.js | 12.16.1 | |
  | npm | 6.14.4 | |

### セットアップ

```js
$ npm install -g typescript

// 確認
$ tsc -v
Version 3.9.3
```

- 挙動チェック

  - `hello.ts`

    ```ts
    let hello: string = 'Hello, im!';
    console.log(hello);
    ```

    - 型の確認：変数`hello`にカーソルをホバリングすると型表示される。  
    （VSCode内蔵のTSによる機能）

  - コンパイル実行（ターミナル）

    ```js
    $ tsc hello.ts

    // 生成された hello.js を実行
    $ node hello.js
    Hello, im!
    ```


