# GAS Online
[English](README.md) | 日本語
## 使い方
テンプレの依存関係は`pnpm up -Lri`によってpnpmで管理されてます。
<br>このため、`pnpm-lock.yaml`が表示されますが、これはどのパッケージマネージャでも動作します。
<br>このファイルは、テンプレのクローンを作成した後、安全に削除できます。
```sh
$ npm install
```
## コマンド
* `npm dev`
   * 開発モードでアプリを実行します
   * [`localhost:3000`](http://localhost:3000)を開くとブラウザで実行できます
   * 編集すると全ページが再読み込みされます
* `npm run build`
   * `dist`で本番用アプリを構築します
