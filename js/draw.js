$(document).ready(function(){
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('main'));

  let tools = new Tool(); //toolオブジェクトを生成.
  /** onMouseDownはマウスがクリックされた時に発動するイベント */
  tools.onMouseDown = function(event){
    //(クリックされた箇所のx座標, クリックされた時のy座標, 円の半径)
    let d = Shape.Circle(event.point.x, event.point.y, 20);
    d.fillColor = 'purple';
  }
});
