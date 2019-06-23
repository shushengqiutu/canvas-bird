//初始化画布 加载 游戏资源
(function () {
    var Game = window.Game = function (canvas_obj) {
        this.id = canvas_obj.id;
        this.url = canvas_obj.R_url;
        this.canvas = document.getElementById(this.id);
        this.ctx = this.canvas.getContext('2d');
        this.num=0
        // 设置画布的宽高
        this.init()
        // 读取资源
        var _this=this;
        this.loadAllResource(function () {
            _this.start()
        })


    }


    Game.prototype.init = function () {
        var dw = document.documentElement.clientWidth;
        var dh = document.documentElement.clientHeight;
        if (dw > 414) {
            dw = 414
        } else if (dw < 320) {
            dw = 320
        }
        if (dh > 720) {
            dh = 720
        } else if (dh < 500) {
            dh = 500
        }
        this.canvas.width = dw - 2;
        this.canvas.height = dh - 2;
    }
    Game.prototype.loadAllResource = function (callback) {
        this.R = {};
        var ajax = new XMLHttpRequest();
        ajax.open('get', this.url, true);
        ajax.send(null)
        var _this = this;
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var json_image = JSON.parse(ajax.responseText)
                    var ary_image = json_image.image
                    ary_image.forEach(function (img, index) {

                        _this.R[img.name] = new Image();

                        _this.R[img.name].src = img.src;
                        _this.R[img.name].onload = function () {
                            _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height)
                            var str = `正在加载第个${index + 1}\/${ary_image.length}资源`
                            _this.ctx.textAlign = 'center';
                            _this.ctx.fillText(str, _this.canvas.width / 2, _this.canvas.height / 2)
                            if(index+1==ary_image.length){
                                // 图片资源加载完毕
                                callback()
                            }


                        }

                    })
                }
            }

        }


    }
    Game.prototype.start=function () {
         var _this=this;
        this.bg=new Background()
        this.land=new Land()

        this.pipe_array=[]
        this.bird=new Bird()

        setInterval(function () {

             _this.ctx.clearRect(0,0,_this.canvas.width,_this.canvas.height)

             _this.bg.move()
            _this.bg.draw()

            _this.land.move()
            _this.land.draw()
           // console.log(_this.num)
            if(_this.num%150==0){
                console.log(_this.num)
                new Pipe()
            }

          _this.pipe_array= _this.pipe_array.filter(function (obj) {
              return obj.x>-obj.pipe_down_w
            })
            _this.pipe_array.forEach(function (obj,x) {
                obj.move()
                obj.draw()

            })

            _this.bird.fly()
            _this.bird.draw()







            _this.num++
             var P_str=`P-${_this.num}`
             _this.ctx.fillStyle='red'
             _this.font='16px 宋体'
             _this.ctx.fillText(P_str,20,20)
         },30)
    }
}())
