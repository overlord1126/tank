
//			w:50, 宽度
//			h:50, 高度
//			x:100, left
//			y:400, top
//			speed:10 速度
//			dirMap: ["top","right","bottom","left"] 可能出现的方向
//			dir:"top", 当前方向
//			live:true,是否活着
//			type:0 ,阵营 0为敌人,1为我方
			
//			bgColor:"red", 颜色
//			isMoving:false ,可以移动
//			canShow: 是否可以射击

class Tank {
	constructor(opts) {
		this.def = {
			w: 50,
			h: 50,
			x: 100,
			y: 600,
			_shengming: 1,	
			type:0,
			that:this,
			set shengming (val){
//				alert(val);
				this._shengming = val;
				if( val == 0 ){
					console.log( "我方阵亡" );
					document.getElementById("box").removeChild(this.that.el)
				}
			},
			get shengming (){
				return this._shengming
			},
			dirMap: ["top","right","bottom","left"],
			dir: "top",
			bgColor: "red",
			speed: 1,
			isMoving:true,
			isLimit:{
				minX:0,
				minY:0,
				maxX:450,
				maxY:450
			}
		}
		Object.assign(this.def, opts);
	}
	init(opts) {
		Object.assign(this.def, opts);
		this.creatDiv();//创建
		this.move();//执行移动
	}
	creatDiv() { //创建div
		this.el = document.createElement("div");
		this.el.className = "tank";

		this.el.style.width = this.def.w + "px";
		this.el.style.height = this.def.h + "px";

		this.el.style.transform = "translate("+ this.def.x +"px,"+ this.def.y +"px)";

		this.el.style.backgroundColor = this.def.bgColor;
		document.getElementById("box").appendChild(this.el);
		this.el.innerHTML = this.def.dir;
	}
	moveToNewPos() { //根据x，y改变位置
		this.el.innerHTML = this.def.dir;
		this.el.style.transform = "translate("+ this.def.x +"px,"+ this.def.y +"px)"

	}
	dead(){
//		alert(1)
	}
	shot(type) {//发射子弹
//		console.log("发射一发子弹向"+this.def.dir,type);
		
		var b = new Bullet({
			x:this.def.x+20,
			y:this.def.y+20,
			dir:this.def.dir,
			type:this.def.type,
//			dir:"right",
		})
		b.init();
//		if( type == 0 ){//敌方发射
//			game.bulletE.push( b );
//			console.log(game);
//		}else if( type == 1 ){
//			game.bulletH.push( b );
//		}
	}
	move() {
		let that = this;
		this.el.timer = setInterval(function() {
//			console.log( that.def.isMoving );
			if( that.def.isMoving ){
				switch(that.def.dir) {
					case "top":
						that.def.y -= that.def.speed;
						break;
					case "right":
						that.def.x += that.def.speed;
						break;
					case "bottom":
						that.def.y += that.def.speed;
						break;
					case "left":
						that.def.x -= that.def.speed;
						break;
					default:
						break;
				}
				if( that.def.x<that.def.isLimit.minX ){
					that.def.x=that.def.isLimit.minX
				}
				if( that.def.x>that.def.isLimit.maxX ){
					that.def.x=that.def.isLimit.maxX
				}
				if( that.def.y<that.def.isLimit.minY ){
					that.def.y=that.def.isLimit.minY
				}
				if( that.def.y>that.def.isLimit.maxY ){
					that.def.y=that.def.isLimit.maxY
				}
				that.moveToNewPos();
			}
		}, 10)
	}
}