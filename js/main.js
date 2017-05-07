$(document).ready(function(){
  'use strict';
  console.log("main.js")
  paper.install(window); //Paper.jsをグローバルスコープにインストール.
  paper.setup(document.getElementById('main')); //Paper.jsと<canvas id="main"/>を結びつける。

  /** 描画 */
  let a = Shape.Circle(400,400,200); //（円の中心の座標x軸, 円の中心の座標y軸, 半径）
  a.fillColor = 'orange'; //円の色
  let b = Shape.Circle(200,200,50);//（円の中心の座標x軸, 円の中心の座標y軸, 半径）
  b.fillColor = 'blue'; //円の色
  paper.view.draw(); //上で指定された図形を描画する.
});
