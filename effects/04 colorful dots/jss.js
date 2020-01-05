var oCanvas = document.querySelector('#starCanvas');
var cxt = oCanvas.getContext('2d');
var width = oCanvas.width = window.innerWidth;
var height = oCanvas.height = window.innerHeight;

var mousePosition = { // 设置初始鼠标的位置为canvas区域宽、高的50%
    x: oCanvas.width * .5,
    y: oCanvas.height * .5
};

var dots = {
    num: 750,
    distance: 50,
    d_radius: 100,
    dotsArrray: []
}
/**
 *
 * 生成 min-255 的一个随机颜色值
 * @param {Number} min 最小颜色值
 */
function createRgbNb(min) {
    return ~~(Math.random()*(255-min) + min);
}

/**
 * 生成一个不透明度为 0.8 的颜色值
 *
 * @param {Number} r 整数 reb 颜色成分
 * @param {Number} g 整数 green 颜色成分
 * @param {Number} b 整数 blue 颜色成分
 */
function createColorStyle(r,g,b) {
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
}

/**
 * @param {*} comp1
 * @param {*} weight1
 * @param {*} comp2
 * @param {*} weight2
 * @returns
 */
function mixComponents(comp1, weight1, comp2, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}

/**
 *混合两个点的颜色
 *
 * @param {*} dot1
 * @param {*} dot2
 */
function averageColorStyles(dot1,dot2) {
    var color1 = dot1.color,
        color2 = dot2.color;
    var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
    return createColorStyle(r,g,b);
}

/**
 * Color 构造函数
 *
 * @param {*} min
 */
function Color(min) {
    min = min || 0;
    this.r = createRgbNb(min);
    this.g = createRgbNb(min);
    this.b = createRgbNb(min);
    this.style = createColorStyle(this.r, this.g, this.b);
}

/**
 * 圆点点 构造函数
 */
function Dot() {
    // 圆点点的位置
    this.x = Math.random()*width;
    this.y = Math.random()*height;

    // 圆点点的运动方向
    this.vx = Math.random() - .5;
    this.vy = Math.random() - .5;

    // 圆点点的半径
    this.radius =  Math.random() * 2;

    // 创建单个圆点点的颜色实例
    this.color = new Color();
}

Dot.prototype.draw = function() {
    cxt.save();
    cxt.beginPath();
    cxt.fillStyle = this.color.style;
    cxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // （0, Math.PI * 2）画圆的起始弧度与终点弧度
    cxt.fill(); // 必须要写的->进行填充
    cxt.closePath();
    cxt.restore();
}

function createDots() {
    for (var i = 0; i < dots.num; i++) {
        console.log()
        dots.dotsArrray.push(new Dot());
    }
}

function drawDots() {
    for (i = 0; i < dots.num; i++) {
        var dot = dots.dotsArrray[i];
        dot.draw();
      }
}

function moveDots() {
    for (var i = 0; i < dots.num; i++) {
        var dot = dots.dotsArrray[i];
        if (dot.y < 0 || dot.y > height) {
            dot.vy = -dot.vy;
        }
        if (dot.x < 0 || dot.x > width) {
            dot.vx = -dot.vx;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
    }
}

function connectDots() {
    for (var i = 0; i < dots.num; i++) {
        for (var j = 0; j < dots.num; j++) {
            var i_dot = dots.dotsArrray[i];
            var j_dot = dots.dotsArrray[j];

            // 判断 点与点 之间的距离 再进行连线
            if (Math.abs(i_dot.x - j_dot.x) < dots.distance && Math.abs(i_dot.y - j_dot.y) < dots.distance) {
                if (Math.abs(i_dot.x - mousePosition.x) < dots.d_radius && Math.abs(i_dot.y - mousePosition.y) < dots.d_radius) {
                    cxt.beginPath();
                    cxt.strokeStyle = averageColorStyles(i_dot, j_dot);
                    cxt.lineWidth = .2;
                    cxt.moveTo(i_dot.x, i_dot.y);
                    cxt.lineTo(j_dot.x, j_dot.y);
                    cxt.stroke();
                    cxt.closePath();
                }
            }
        }
    }
}

function animateDots() {
    cxt.clearRect(0, 0, width, height);
    drawDots();
    moveDots();
    connectDots();
    requestAnimationFrame(animateDots);
}

oCanvas.addEventListener('mousemove', function (e) {
    mousePosition.x = e.screenX;
    mousePosition.y = e.screenY;
}, false);

oCanvas.addEventListener('mouseleave', function () {
    mousePosition.x = width / 2;
    mousePosition.y = height / 2;
}, false);

window.addEventListener('resize', function(){
    width = oCanvas.width = window.innerWidth;
    height = oCanvas.height = window.innerHeight;
}, false)

createDots();
requestAnimationFrame(animateDots);