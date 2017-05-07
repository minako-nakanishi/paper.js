$(document).ready(function(){
  'use strict';
  console.log("word.js");
  paper.install(window);  //Paper.jsをグローバルスコープにインストール.
  paper.setup(document.getElementById('main')); //Paper.jsと<canvas id="main"/>を結びつける。

  let tools = new Tool(); //toolオブジェクトの生成.

  // Write word
  let w = Shape.Circle(400,400,160); //（円の中心の座標x軸, 円の中心の座標y軸, 半径）
  w.fillColor = 'yellow'; //円の色

  /** x軸=400, y軸=400の場所にテキスト領域を作成 */
  let word = new PointText(400,400);
  word.justification = 'center'; // テキストの場所
  word.fontSize = 20; //フォントサイズ
  word.content = "I have a pen"; //文字

  /** イベントハンドラ */
  /** クリックした箇所に半径20pxのピンクの円が描画される */
  tools.onMouseDown = function(event){
    let e = Shape.Circle(event.point.x, event.point.y, 30);
    e.fillColor = 'pink';
  };
});
