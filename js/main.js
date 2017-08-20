/**
 * Created by 水滴 on 2017/6/5.
 */
const button = document.querySelector('a'),
  container = document.querySelector(".container");

button.addEventListener('click', function(e) {
  //获取动画元素
  var zoom1 = document.querySelector(".home-scene-bg");
  zoom1.style.animation = "zoomIn1 5s linear";
  var zoom2 = document.querySelector(".home-scene-mid-ground");
  zoom2.style.animation = "zoomIn2 5s linear";
  var zoom3 = document.querySelector(".home-scene-mid-mountains");
  zoom3.style.animation = "zoomIn3 5s linear";
  var zoom4 = document.querySelector(".home-scene-mountains");
  zoom4.style.animation = "zoomIn4 5s linear";
  setTimeout(function() {
    zoom1.style.animation = "";
    zoom2.style.animation = "";
    zoom3.style.animation = "";
    zoom4.style.animation = "";
  }, 5000)
})

//star特效
var stars_box = document.getElementById('stars_box'); //获取id为star_box的元素

var Obj = function(){}; //创建一个对象

Obj.prototype.drawStar = function() { //增加对象原型方法drawStar
  var odiv = document.createElement('div'); //创建div
  odiv.style.width = '7px';
  odiv.style.height = '7px';
  odiv.style.position = 'relative'; //设置div为相对定位
  odiv.style.left = Math.floor(document.body.clientWidth * Math.random()) + 'px'; //div的left值不能超出屏幕的宽度
  odiv.style.top = Math.floor(document.body.clientHeight * Math.random() * 0.5) + 'px'; //div的left值不能超出屏幕的高度
  odiv.style.overflow = 'hidden'; //设置div的overflow为hidden
  stars_box.appendChild(odiv); //添加div到stars_box元素上
  var ostar = document.createElement('img'); //再创建img元素
  ostar.style.width = '49px';
  ostar.style.height = '7px';
  ostar.src = 'http://ouyt4c4z5.bkt.clouddn.com/star.png';
  ostar.style.position = 'absolute'; //设置img为绝对定位
  ostar.style.top = '0px';
  odiv.appendChild(ostar); //把img添加到div中
  Play(ostar); //实现动画闪烁的方法Play();
}

function Play(ele) {
  var i = Math.floor(Math.random() * 7); //为了使星星不同时闪烁，设置随机值
  var timer = setInterval(function() { //每100ms执行一次匿名方法
    if (i < 7) {
      ele.style.left = -i * 7 + 'px';
      i++;
    } else {
      i = 0;
    }
  }, 100);
}

//使用for循环创建30个不同的对象
for (var i = 0; i < 30; i++) {
  var obj = new Obj();
  obj.drawStar();
}
