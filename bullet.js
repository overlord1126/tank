//speed: 10,//速度
//x: 300,//位置
//y: 400,
//live:1,//子弹生命值
//w:10, //子弹大小
//h:10,
//dir: "",//方向
//type :0 //类型（0：地方发射，1：我方发射）

class Bullet{
	constructor(opt){
		this.def={
			w:10,
			h:10,
			_shengming:1,
			that:this,
			set shengming (val){
//				console.log(val);
				if( val == 0 ){
					this.that.dead();
				}
				this._shengming = val;
			},
			get shengming (){
				return this._shengming;
			},
			speed: 5,
			x: 300,
			y: 400,
			dir: "",
			type: 0,
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
		this.el.style.transform = "translate("+ this.def.x +"px,"+ this.def.y +"px)"

		
//		this.el.style.left = this.def.x + "px";
//		this.el.style.top = this.def.y + "px";
		document.getElementById("box").appendChild(this.el);
	}
	draw(){
		this.el.style.transform = "translate("+ this.def.x +"px,"+ this.def.y +"px)"

		
//		this.el.style.left = this.def.x + "px";
//		this.el.style.top = this.def.y + "px";
		
		if( this.def.x<0||this.def.x>this.def.limit.maxX || this.def.y<0 || this.def.y>this.def.limit.maxY ){
			console.log( this.el );
			this.dead();
		}else if( this.def.type == 0 ){//检测是否碰撞到我方
			game.check( game.hero.def,this.def );
		}
	}
	dead(){
		this.el.parentNode.removeChild( this.el );
		clearInterval( this.el.timer );
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
