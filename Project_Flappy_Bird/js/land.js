(function () {
    var Land=window.Land=function () {
        this.image=game.R.land;
        this.w=this.image.width;
        this.h=this.image.height;
        this.x=0;
        this.y=0.73*game.canvas.height
        this.speed=1.6;
    }
    Land.prototype.move=function(){
          this.x-=this.speed
         if(this.x<-this.w){
             this.x=0
         }
    }

    Land.prototype.draw=function () {
        game.ctx.drawImage(this.image,0,0,this.w,this.h,this.x,this.y,this.w,this.h)
        game.ctx.drawImage(this.image,0,0,this.w,this.h,this.x+this.w,this.y,this.w,this.h)
        game.ctx.drawImage(this.image,0,0,this.w,this.h,this.x+2*this.w,this.y,this.w,this.h)
        game.ctx.fillStyle='#DED895'
        game.ctx.fillRect(0,this.y+this.h-2, game.canvas.width,game.canvas.height-this.y-this.h)



    }

})()
