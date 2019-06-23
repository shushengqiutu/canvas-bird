(function () {
    var Pipe=window.Pipe=function () {
        this.n=Math.floor(Math.random()*2+1)
        this.pipe_down=game.R['pipe'+this.n+'_down']
        this.pipe_down_w=this.pipe_down.width
        this.pipe_down_h=this.pipe_down.height
        this.pipe_down_min_h=100
        this.fly_space=Math.floor(Math.random()*100+80)
        this.pipe_down_y= this.pipe_down_min_h+parseInt(Math.random()*(this.pipe_down_h-this.pipe_down_min_h*1.5))

        this.x=game.canvas.width
        this.speed=2

        this.pipe_up=game.R['pipe'+this.n+'_up']
        this.pipe_up_w=this.pipe_up.width
        this.pipe_up_y=game.canvas.height*0.73-this.pipe_down_y-this.fly_space

        game.pipe_array.push(this)
        //console.log(game.canvas.height*0.73)
       // console.log(this.fly_space+this.pipe_down_y+this.pipe_up_y)

    }
    Pipe.prototype.move=function(){
        this.x-=this.speed
    }

    Pipe.prototype.draw=function () {

        game.ctx.drawImage(this.pipe_down,0,this.pipe_down_h-this.pipe_down_y,this.pipe_down_w,this.pipe_down_y,this.x,0,this.pipe_down_w,this.pipe_down_y)
        game.ctx.drawImage(this.pipe_up,0,0,this.pipe_up_w, this.pipe_up_y,this.x,this.pipe_down_y+this.fly_space,this.pipe_up_w,this.pipe_up_y)
    }


})()
