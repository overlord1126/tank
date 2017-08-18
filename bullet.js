//speed: 10,//速度
//x: 300,//位置
//y: 400,
//dir: "",//方向

class Bullet{
	constructor(opt){
		this.def={
			speed: 5,
			x: 300,
			y: 400,
			dir: "",
			limit:{
				minX:0,
				minY:0,
				maxX:500,
				maxY:500,
			}
		}
		Object.assign( this.def,opt );
	}
	init(){
		this.creat();
		this.fly();
	}
	creat(){
		this.el = document.createElement("div");
		this.el.className = "bullet";
		this.el.style.left = this.def.x + "px";
		this.el.style.top = this.def.y + "px";
		document.getElementById("box").appendChild(this.el);
	}
	draw(){
		this.el.style.left = this.def.x + "px";
		this.el.style.top = this.def.y + "px";
		
		if( this.def.x<0||this.def.x>this.def.limit.maxX || this.def.y<0 || this.def.y>this.def.limit.maxY ){
			this.el.parentNode.removeChild( this.el );
			clearInterval( this.el.timer );
			e.def.live = "dead";
		}
	}
	fly(){
		var that = this;
		this.el.timer = setInterval(function(){
			switch ( that.def.dir ){
				case "top":
					that.def.y -= that.def.speed;
					break;
				case "bottom":
					that.def.y += that.def.speed;
					break;
				case "left":
					that.def.x -= that.def.speed;
					break;
				case "right":
					that.def.x += that.def.speed;
					break;
				default:
					break;
			}
			that.draw();
		},10)
	}
}
