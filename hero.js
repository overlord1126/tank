class Hero extends Tank {
	constructor(opts){
		super();
		Object.assign( this.def,opts );
	}
	init(){
		this.creatDiv();//创建
		this.move();//执行移动
		this.loadAndFire();//按下j可发射
		this.switchDir();//移动作用
	}
	switchDir(){
		var that = this;
		document.addEventListener("keydown",function(ev){
			console.log( ev.keyCode );
			if( ev.keyCode == 87 || ev.keyCode == 68 || ev.keyCode == 65 || ev.keyCode == 83){
				that.def.isMoving = true;
			}
			switch (ev.keyCode){
				case 87:
					that.def.dir = "top";
					break;
				case 68:
					that.def.dir = "right";
					break;
				case 65:
					that.def.dir = "left";
					break;
				case 83:
					that.def.dir = "bottom";
					break;
				default:
					break;
			}
		})
		document.addEventListener("keyup",function(ev){
			if( ev.keyCode == 87 || ev.keyCode == 68 || ev.keyCode == 65 || ev.keyCode == 83){
				that.def.isMoving = false;
			}
		})
	}
	loadAndFire(){
		var that = this;
		document.addEventListener("keydown",function(ev){
			if(ev.keyCode == 74){//按下j
				that.shot();
			}
		})
	}
}
