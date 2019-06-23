(function () {
    var Bird = window.Bird = function () {
        this.n = parseInt(Math.random() * 3)
        this.y=150
        this.image = [
            game.R['bird' + this.n + '_0'],
            game.R['bird' + this.n + '_1'],
            game.R['bird' + this.n + '_2']

        ]
        console.log(this.image)
        console.log(this.n)

        this.w = this.image[0].width;
        this.h = this.image[0].height;
        this.fly_n = 0
        this.fly_g=0.4
        this.fly_num=0
        this.fly_bloon=false
        this.x=120
        this.d=0.6
    }
    Bird.prototype.draw = function () {
        game.ctx.save()
        game.ctx.translate(this.x,this.y)
        game.ctx.rotate(this.d)
        //game.ctx.drawImage(this.image[this.fly_n], 0, 0, this.w, this.h, -0.5*this.w, -0.5*this.h, this.w, this.h)
        game.ctx.drawImage(this.image[this.fly_n],-0.5*this.w, -0.5*this.h)
        game.ctx.restore()
    }
    Bird.prototype.fly = function () {

        game.num % 10 == 0 && this.fly_n++;
        if (this.fly_n == 3) {
            this.fly_n = 0
        }
        this.fly_num++
        this.d+=0.04

       // console.log(this.fly_num)
        if(this.fly_bloon){
            this.y-=(12-this.fly_num*1)
            console.log(this.fly_num)
            if(this.fly_num==20){
                this.fly_bloon=false
            }
        }else{
            this.y+=this.fly_g*this.fly_num
        }
        if(this.y>game.land.y-20){
            this.y=game.land.y-20
        }
       // console.log(game.land)


    }
    Bird.prototype.isFly=function () {
        this.fly_bloon=true
        this.fly_num=0
        this.d=-0.6


    }


})()
