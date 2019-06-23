(function () {
  var Background=window.Background=function () {
      this.image=game.R.bg_day;
      this.w=this.image.width;
      this.h=this.image.height;
      this.x=0;
      this.speed=1;
      this.y=0.62*game.canvas.height-this.h*0.65
      //大地






  }
  // 绘制图片
    Background.prototype.draw=function () {
        game.ctx.fillStyle='#4EC0CA'
        game.ctx.fillRect(0,0,game.canvas.width,this.y)
        game.ctx.drawImage(this.image,0,0,this.w,this.h,this.x,this.y,this.w,this.h)
        game.ctx.drawImage(this.image,0,0,this.w,this.h,this.x+this.w,this.y,this.w,this.h)
        game.ctx.drawImage(this.image,0,0,this.w,this.h,this.x+2*this.w,this.y,this.w,this.h)
        game.ctx.fillStyle='red'
        game.ctx.fillRect(0,this.y+this.h,game.canvas.width,game.canvas.height-this.h-this.y)



    }

    Background.prototype.move=function () {
        this.x-=this.speed;
        if(this.x==-this.w){
            this.x=0
        }



    }
})()
