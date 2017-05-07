$(document).ready(function(){
  'use strict';
  console.log("reMain.js");
  paper.install(window);
  paper.setup(document.getElementById('main'));

  /**繰り返しの描画*/
  let b; //bを宣言.
   /**x軸=50に端の円の中心が来る.外枠の長さは800×800なのでx<800.円の中心から
      隣の円の中心までの距離は100px. y軸も同様*/
  for (let x=50; x<800; x+=100 ){
    for(let y=50; y<800; y+=100){
      /** (x軸, y軸, 円の半径) */
      b = Shape.Circle(x,y,40);
      b.fillColor = 'lightgreen';
    }
  }

});
