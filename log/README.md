# 概要

- Golang と GitHub Actons の `schedule` を用いて [haytok/README.md](https://github.com/haytok/haytok/blob/gh-pages/README.md) を自動更新するためのアプリケーションを実装した。その時に行った作業ログなどを残す。

## ローカルで開発するために開発用サーバをセットアップする

- Go1.16 でアップデートがあった io/ioutil パッケージが "deprecated" になるらしい。そのため、`ioutil.ReadAll` ではなく `io.ReadAll` で記述する。少なくとも Go1 の間はソースレベルの後方互換性が保たれるため、必須ではないがより良いという点で `io.ReadAll` の記述を行った。

### 参考

- [Go1.16からのio/ioutilパッケージ ](https://future-architect.github.io/articles/20210210/)

## GitHub Actions の Golang の実行環境に関して

- [setup-go](https://github.com/actions/setup-go) を活用した。

## Golang におけるファイルの書き込みに関して

- [Go by Example: Writing Files](https://gobyexample.com/writing-files) のサンプルコードを参考に実装した。
- [Go by Example](https://gobyexample.com) のサイトが参考になる気がした。

## GET した RSS の XML の取得とパースに関して

- [[Golang] XML Parsing Example (7) - Parse RSS 2.0 ](https://siongui.github.io/2015/02/27/go-parse-rss2/) と [userpages/content/code/go-xml/example-6.xml](https://github.com/siongui/userpages/blob/master/content/code/go-xml/example-6.xml) が非常に参考になった。GET する XML のタグを過不足なく定義する必要はなく、使用するタグのみ定義すれば Golang の標準ライブラリの `xml.Unmarshal` が良しなに処理を行ってくれる。

- [Goのencoding/xmlを使いこなす](https://qiita.com/ono_matope/items/70080cc33b75152c5c2a) や [Parsing XML Files With Golang](https://tutorialedge.net/golang/parsing-xml-with-golang/) が `encoding/xml` の使い方の全貌が掴めた。

## ロギングに関して

- [Goエラーハンドリング戦略](https://zenn.dev/nobonobo/articles/0b722c9c2b18d5) を参考に標準ライブラリを使ってログを吐き出すロジックを実装してみた。以下の画像のように GitHub Actions のログに吐き出されているのが確認できる。

![image](https://user-images.githubusercontent.com/44946173/149681842-09a39576-eaa9-4a91-b595-7d436cde6536.png)
