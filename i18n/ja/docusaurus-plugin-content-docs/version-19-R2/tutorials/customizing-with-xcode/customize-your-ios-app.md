---
id: customize-your-ios-app
title: 4D for iOS アプリのカスタマイズ
---

簡単なものから複雑なものまで、ストーリーボードにさまざまな変更を加えてみましょう。

![最終結果](img/Simlator-Before-After-Xcode-4D-for-iOS.png)

## ⒈ 簡単なラベル変更

まず、ラベルのフォントとカラーを変更するところから始めます:

* Navigation tab から *ContactDetailsForm.storyboard* ファイルを開きます。
* First Name ラベルをクリックします (インターフェースビルダーまたは左ペインからも選択可能です)。
* ユーティリティーエリアで Attribute inspector ペインを選択します。

![属性インスペクター](img/Attributes-inspector-Xcode-4D-for-iOS.png)

* フォントを Helvetica Neue Bold から Futura Bold に変更します。

![属性インスペクターのフォント](img/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* また、フォントカラーも同じペインで変更できます。

![属性インスペクターのカラー](img/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## ⒉ プロフィール画像の位置を変更する

4D for iOS テンプレートは、すべてのデバイスでアプリ要素がうまく表示されるように制約を使用しています。

*ContactDetailsForm.storyboard* ファイルでは、画像・ファーストネーム・ラストネームのラベルがすべて中央揃えになっています。

これが下のように表示されるよう、変更してみましょう:

![シミュレーターの結果](img/Simlator-Final-Xcode-4D-for-iOS.png)

まず、画像を縦に配置し、ファーストネームとラストネームのラベルを画像の右側にドラッグします。

次に画像を選択し、ユーティリティーエリアから Size inspector ペインを開きます。 X 座標を 161.67 から 40.67 に、Y 座標を 28 から 79 に変更します。

![プロフィール画像の位置](img/Profil-picture-position-Xcode-4D-for-iOS.png)

ご覧のように位置は変わりましたが、Xcode には黄色い線が表示されています...なぜでしょう？ この黄色い線は、もはや有効でない制約を表しています。

## ⒊ プロフィール画像の制約を修正する

スーパービュー (画像を含む親ビューのこと) 内で画像を縦中央に配置するには、既存の制約を削除し、新しい制約を追加する必要があります。

この画像には現在、以下の制約があります:

* Width Equals: 78 (横幅 78 ピクセル)
* Height Equals: 78 (高さ 78 ピクセル)
* Align Center X to: Superview (親ビューに対して横中央揃え)
* Top Space to: Superview (親ビューに対する上部スペース)
* Bottom space to: `<First Name>` (画像下辺から First Name ラベルまでの間隔)

![プロフィール画像の制約](img/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Width と Height 以外のすべての制約を削除します (Width と Height は後で Size inspector の Constraints セクションで修正します)。 制約がなくなったため、画像の外枠が赤色に表示されているはずです。

Align ボタン (ウィンドウ下の四角が左揃えされているアイコン) をクリックして、**Vertically in Container** (縦中央揃え) のチェックボックスを有効にします。

![プロフィール画像の整列](img/Profil-picture-Align-Xcode-4D-for-iOS.png)

次に、**Add New Constraints** ボタン (T に囲まれた四角のアイコン) をクリックし、左側の余白 (Leading Space) の赤い点線をクリックして (実線に変化します) 制約を追加します。

![プロフィール画像の新しい制約](img/Profil-picture-new-constraints-4D-for-iOS.png)

この時点で、プロフィール画像の制約がすべて青色で表示されているはずです。

おつかれさまでした！ プロフィール画像に位置制約が追加され、正しく配置されました。

> **TIPS**
> 
> * 2つのビューの間に制約を作成するには、Ctrlキーを押しながら片方のビューをもう片方のビューにドラッグします。 マウスボタンを離すと同時に、このコンテキストで設定可能な制約の選択肢が表示されます。
> 
> * 制約を削除するには、Interface Builder または Navigation エリア から制約を選択し、Deleteキーで削除します。

## ⒋ ラベルの位置と制約を修正する

#### 今度は、First Name ラベルを修正しましょう。

まずは、位置と幅を変更します:

* Interface Builder で First Name ラベルを選択します。
* 次に、Size inspector で Width を 386 ピクセルから 267 ピクセルに変更します。
* X 座標を 8 から 127 に、Y 座標を 28 から 79 に変更します。

![ファーストネームラベルの位置](img/First-Name-Label-position-Xcode-4D-for-iOS.png)

制約も修正しましょう:

* 左と下の余白の制約を削除します。
* Controlキーを押しながら First Name ラベルをプロフィール画像へとドラッグします。メニューから Horizontal Spacing を選択して、間隔の制約を追加します。
* Controlキーを押しながら First Name ラベルをプロフィール画像へとドラッグします。 メニューから Top を選択し、両方の要素が上揃えになるよう、制約を追加します。

![ファーストネームラベルの上部の制約](img/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### 最後に、Last Name ラベルを修正します。

位置と幅を変更します:

* Interface Builder で Last Name ラベルを選択します。
* Size inspector で Width を 386 ピクセルから 267 ピクセルに変更します。
* X 座標を 8 から 127 に、Y 座標を 144.33 から 118.33 に変更します。

![ラストネームラベルの位置](img/Last-Name-Label-position-Xcode-4D-for-iOS.png)

制約も修正しましょう:

* 左の余白の制約を削除します。
* Add New Constraints ボタンをクリックして上 (Top) の余白の制約を設定します。また、Controlキーを押しながら First Name ラベルをプロフィール画像へとドラッグします。メニューから Horizontal Spacing を選択して、間隔の制約を追加します。

![ラストネームラベルの制約](img/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

2つのラベルの位置が調整できました。

シミュレータで結果を確認しましょう !

![シミュレーターの結果](img/Simulator-Xcode-4D-for-iOS.png)

おや。 望んだとおりの結果ではありません...。

* First Name と Last Name のラベルを選択し、Attributes inspector で Alignment を中央から左に変更します。

![ラベルの整列](img/Labels-Alignment-Xcode-4D-for-iOS.png)

* 次に、プロフィール画像を選択して、左の予約の制約をダブルクリックします。
* 値 を 40.67 ピクセルから 80 ピクセルに変更します。

![制約の調整](img/Constraints-adjustments-Xcode-4D-for-iOS.png)

良さそうですね！ これで、すべての制約が機能し、整合性も取れました。

このように、アプリのカスタマイズはとても簡単です！
