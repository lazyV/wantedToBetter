var digit = [
    [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
    ], //0
    [
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
    ], //1
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ], //2
    [
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //3
    [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1]
    ], //4
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //5
    [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //6
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0]
    ], //7
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //8
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0]
    ], //9
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ] //:
]

function Clock(config) {
    var selector = config.selector || '#canvas'
    var canvas = document.querySelector(selector)
    this.W = canvas.width = config.width || 420
    this.H = canvas.height = config.height || 50
    
    this.ballsColor = config.ballsColor || 'white'
    this.ctx = canvas.getContext('2d')
    // 粒子半径
    this.R = canvas.height / 20 - 1
    // 存储时间数字
    this.nData = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date())[0].split('').map(n => n === ':' ? 10 : +n)
    // 存放小球数据
    this.balls = []

}

Clock.prototype = {
    renderDigit: function (index, num) {
        for (var j = 0; j < digit[num].length; j ++) {
            for (var i = 0; i < digit[num][j].length; i++) {
                if (digit[num][j][i] === 1) {
                    this.ctx.beginPath()
                    this.ctx.arc(14 * (this.R + 2) * index + (2 * i + 1) * (this.R + 1), (2 * j + 1) * (this.R + 1), this.R, 0, Math.PI * 2)
                    this.ctx.fillStyle = this.ballsColor
                    this.ctx.fill()
                    this.ctx.closePath()
                }
            }
        }
    },

    updateDigitTime: function () {
        var changeNumArray = []
        var nowNumArr = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date())[0].split('').map(n => n === ':' ? 10 : +n)
        for (var i = this.nData.length; i > 1; i --) {
            if (nowNumArr[i] !== this.nData[i]) {
                changeNumArray.push({
                    index: i, // 第几个数字发生改变
                    num: nowNumArr[i] // 改变的数字是几
                })
            }
        }
        // 增加小球
        for (var j = 0; j < changeNumArray.length; j ++) {
            this.addBalls.call(this, changeNumArray[j].index, changeNumArray[j].num)
        }
        this.nData = nowNumArr.concat()
    },

    // 更新小球状态
    updateBalls: function () {
        for(var i = 0; i < this.balls.length; i++) {
            this.balls[i].stepY += this.balls[i].disY
            this.balls[i].x += this.balls[i].stepX
            this.balls[i].y += this.balls[i].stepY   
            if(this.balls[i].x > this.W + this.R || this.balls[i].y > this.H + this.R){
                this.balls.splice(i, 1)
                i--;
            }
        }
    },

    // 增加要运动的小球
    addBalls: function (index, num) {
        var numArray = [1, 2, 3]
        var colorArray =  ["#3BE","#09C","#A6C","#93C","#9C0","#690","#FB3","#F80","#F44","#C00"]

        for (var j = 0; j < digit[num].length; j ++) {
            for (var i = 0; i < digit[num][j].length; i ++) {
                if(digit[num][i][j] === 1){
                    var ball = {
                        x: 14 * (this.R + 2) * index + (2 * i + 1) * (this.R + 1),
                        y: (2 * j + 1) * (this.R + 1),
                        stepX: Math.floor(Math.random() * 4 - 2),
                        stepY: -2 * numArray[Math.floor(Math.random() * numArray.length)],
                        color: colorArray[Math.floor(Math.random() * colorArray.length)],
                        disY: 1
                    }
                    this.balls.push(ball); 
                }
            }
        }
    },
    render: function () {
        this.ctx.clearRect(0, 0, this.W, this.H)

        for(var i = 0; i < this.nData.length; i++){
            this.renderDigit(i, this.nData[i])
        }

        for(var i = 0; i < this.balls.length; i++){
            this.ctx.beginPath()
            this.ctx.arc(this.balls[i].x, this.balls[i].y, this.R, 0, 2 * Math.PI)
            this.ctx.fillStyle = this.balls[i].color
            this.ctx.closePath()
            this.ctx.fill()
        }
    },

    init: function () {
        var that = this
        clearInterval(oTimer)
        var oTimer = setInterval(function () {
            that.updateBalls()
            that.updateDigitTime()
            that.render()
        }, 50)
    }

}
