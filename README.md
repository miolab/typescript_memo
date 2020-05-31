# TypeScript Memo

`TypeScript`開発メモ。

- [公式](https://www.typescriptlang.org/)
- [GitHub](https://github.com/microsoft/TypeScript)
  - [Wiki](https://github.com/microsoft/TypeScript/wiki)

### 実行環境

- macOS 10.14.6

  | | バージョン | 備考 |
  | :-- | :-- | :-- |
  | TypeScript | 3.9.3 | |
  | Node.js | 12.16.1 | |
  | npm | 6.14.4 | |

### セットアップ

```
$ npm install -g typescript

// 確認
$ tsc -v
Version 3.9.3
```

  - 挙動チェック

    - `hello.ts`

    ```
    let hello: string = 'Hello, im!';
    console.log(hello);
    ```

    - コンパイル実行（ターミナル）

    ```
    $ tsc hello.ts

    $ node hello.js
    Hello, im!
    ```