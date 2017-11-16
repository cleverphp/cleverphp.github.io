var width = window.innerWidth;
var height = window.innerHeight;

var page = document.getElementById('page');

page.setAttribute('width',width+'px');

page.setAttribute('height',height+'px');

var canvas = document.createElement('canvas');

canvas.setAttribute('width',width+'px');

canvas.setAttribute('height',height+'px');

canvas.style.position = "absolute";

canvas.style.top = "0px";

canvas.style.left = "0px";

document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

ctx.fillStyle='rgba(0,0,0,0.6)';

ctx.fillRect(0,0,width,height);

var img = new Image();

img.src = "https://raw.githubusercontent.com/cleverphp/weixinTip/master/live_weixin.png";

img.onload = function(){

	ctx.drawImage(this,0,0,width,height);
}

